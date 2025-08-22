"use client"
import React, { useState, useEffect } from 'react';
import { CreditCard, Lock, AlertCircle, CheckCircle2, Package } from 'lucide-react';
import { useRouter } from 'next/router';

// Interfaces actualizadas para OpenPay
interface RequestData {
  token: string;        // Token de OpenPay en lugar de datos de tarjeta
  deviceId: string;     // Device ID de OpenPay
  email: string;
  amount: number;
}

interface ResponseData {
  id: number, 
  title: string,
}

interface PaymentFormData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
  email: string;
  amount: number;
}

interface PaymentStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

interface ProductInfo {
  title: string;
  description: string;
  image: string;
  price: number;
}

const PaymentGateway: React.FC = () => {
  const router = useRouter();

  // Lee los parámetros de la URL
  const amountFromQuery = typeof router.query.amount === "string"
    ? parseFloat(router.query.amount)
    : 100.00;

  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    email: '',
    amount: amountFromQuery || 100.00
  });

  const [productInfo, setProductInfo] = useState<ProductInfo>({
    title: '',
    description: '',
    image: '',
    price: amountFromQuery || 100.00
  });

  const [imageError, setImageError] = useState(false);
  const [status, setStatus] = useState<PaymentStatus>({ type: 'idle' });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [countdown, setCountdown] = useState(5);

  // Nueva función que tokeniza con OpenPay y luego envía al backend
  const createPayment = async (paymentData: PaymentFormData): Promise<void> => {
    setStatus({ type: 'loading' });
    
    try {
      // Verificar que OpenPay esté disponible
      if (!window.OpenPay) {
        throw new Error('OpenPay no está disponible');
      }

      // Obtener device ID primero
      const deviceId = await new Promise<string>((resolve, reject) => {
        window.OpenPay.deviceData.setup(
          (deviceId: string) => resolve(deviceId),
          (error: any) => reject(new Error('Error al obtener device ID'))
        );
      });

      // Tokenizar la tarjeta
      const token = await new Promise<string>((resolve, reject) => {
        // Parsear la fecha de expiración MM/YY
        const [month, year] = paymentData.expiryDate.split('/');
        
        window.OpenPay.token.create({
          card_number: paymentData.cardNumber.replace(/\s/g, ''),
          holder_name: paymentData.cardholderName,
          expiration_year: year,
          expiration_month: month,
          cvv2: paymentData.cvv
        },
        (response) => {
          resolve(response.data.id);
        },
        (error) => {
          reject(new Error(error.data.description || 'Error al tokenizar la tarjeta'));
        });
      });

      // Ahora enviar el token al backend
      const requestData: RequestData = {
        token,
        deviceId,
        email: paymentData.email,
        amount: paymentData.amount
      };

      const response = await fetch('http://localhost:3001/pago', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
      
      if (!response.ok) {
        throw new Error('Error de red');
      }
      
      const data: ResponseData = await response.json();
      console.log('Pago exitoso:', data);
      
      setStatus({ type: 'success', message: 'Pago procesado exitosamente' });
      setShowSuccessModal(true);
      
      // Reiniciar el formulario
      setFormData({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardholderName: '',
        email: '',
        amount: 0.00
      });
      
    } catch (error) {
      console.error('Error en el pago:', error);
      setStatus({ 
        type: 'error', 
        message: error instanceof Error ? error.message : 'Error al procesar el pago. Inténtalo de nuevo.' 
      });
    }
  };

  // Efecto para el countdown y redirección automática
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (showSuccessModal && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (showSuccessModal && countdown === 0) {
      router.push("/prueba");
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [showSuccessModal, countdown, router]);

  // Formatear número de tarjeta (agregar espacios cada 4 dígitos)
  const formatCardNumber = (value: string): string => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  // Formatear fecha de expiración (MM/YY)
  const formatExpiryDate = (value: string): string => {
    const v = value.replace(/\D/g, '');
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return v;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    let formattedValue = value;
    
    if (name === 'cardNumber') {
      formattedValue = formatCardNumber(value);
    } else if (name === 'expiryDate') {
      formattedValue = formatExpiryDate(value);
    } else if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').substring(0, 4);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const validateForm = (): boolean => {
    const { cardNumber, expiryDate, cvv, cardholderName, email } = formData;
    
    if (!cardNumber || cardNumber.replace(/\s/g, '').length < 13) return false;
    if (!expiryDate || expiryDate.length !== 5) return false;
    if (!cvv || cvv.length < 3) return false;
    if (!cardholderName.trim()) return false;
    if (!email || !email.includes('@')) return false;
    
    return true;
  };

  // Función handleSubmit modificada para usar OpenPay
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus({ type: 'error', message: 'Por favor completa todos los campos correctamente' });
      return;
    }

    // Ahora pasamos los datos del formulario directamente
    await createPayment(formData);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // Función para cerrar modal manualmente
  const handleCloseModal = () => {
    setShowSuccessModal(false);
    router.push("/prueba");
  };

  // Actualizar información del producto cuando cambien los parámetros de la URL
  useEffect(() => {
    const { amount, title, description, image } = router.query;
    
    if (typeof amount === "string") {
      const parsedAmount = parseFloat(amount) || 100.00;
      setFormData((prev) => ({
        ...prev,
        amount: parsedAmount
      }));
      setProductInfo((prev) => ({
        ...prev,
        price: parsedAmount
      }));
    }
    
    if (typeof title === "string") {
      setProductInfo((prev) => ({
        ...prev,
        title: decodeURIComponent(title)
      }));
    }
    
    if (typeof description === "string") {
      setProductInfo((prev) => ({
        ...prev,
        description: decodeURIComponent(description)
      }));
    }
    
    if (typeof image === "string") {
      setProductInfo((prev) => ({
        ...prev,
        image: decodeURIComponent(image)
      }));
      setImageError(false);
    }
  }, [router.query]);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-4">
            <CreditCard className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Pago Seguro</h1>
          <p className="text-slate-400">Completa tu información de pago</p>
        </div>

        {/* Main Content - Product Card + Payment Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Card - Left Side */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-2xl border border-white/20">
            <h2 className="text-xl font-semibold text-white mb-4">Resumen del producto</h2>
            
            <div className="space-y-4">
              {/* Product Image */}
              <div className="aspect-square rounded-lg overflow-hidden bg-white/5 border border-white/10">
                {!imageError ? (
                  <img
                    src={productInfo.image}
                    alt={productInfo.title}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                    onLoad={() => setImageError(false)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-white/70">
                    <Package className="w-16 h-16 mb-2" />
                    <span className="text-sm text-center">Imagen del producto</span>
                    <span className="text-xs text-center mt-1 text-white/50">{productInfo.title}</span>
                  </div>
                )}
              </div>
              
              {/* Product Info */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">{productInfo.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{productInfo.description}</p>
              </div>
              
              {/* Price */}
              <div className="border-t border-white/10 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Total:</span>
                  <span className="text-2xl font-bold text-white">${productInfo.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form - Right Side */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-2xl border border-white/20">
            <h2 className="text-xl font-semibold text-white mb-6">Información de pago</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="correo@email.com"
                  required
                />
              </div>

              {/* Card Number */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Número de tarjeta
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  required
                />
              </div>

              {/* Expiry and CVV */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Vencimiento
                  </label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="MM/YY"
                    maxLength={5}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="123"
                    maxLength={4}
                    required
                  />
                </div>
              </div>

              {/* Cardholder Name */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Nombre del titular
                </label>
                <input
                  type="text"
                  name="cardholderName"
                  value={formData.cardholderName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Juan Pérez"
                  required
                />
              </div>

              {/* Status Messages */}
              {status.type === 'error' && (
                <div className="flex items-center space-x-2 text-red-400 bg-red-900/20 p-3 rounded-lg border border-red-500/20">
                  <AlertCircle className="w-5 h-5" />
                  <span className="text-sm">{status.message}</span>
                </div>
              )}

              {status.type === 'success' && !showSuccessModal && (
                <div className="flex items-center space-x-2 text-green-400 bg-green-900/20 p-3 rounded-lg border border-green-500/20">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm">{status.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.type === 'loading' || !validateForm()}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100"
              >
                <Lock className="w-5 h-5" />
                <span>
                  {status.type === 'loading' ? 'Procesando...' : `Pagar $${formData.amount.toFixed(2)}`}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal de Pago Exitoso */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4">
            {/* Header del Modal */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-t-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">¡Pago Exitoso!</h2>
              <p className="text-green-100">Tu transacción se ha procesado correctamente</p>
            </div>

            {/* Cuerpo del Modal */}
            <div className="p-6 text-center">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {productInfo.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Monto pagado: <span className="font-semibold text-green-600">${productInfo.price.toFixed(2)}</span>
                </p>
                <p className="text-gray-500 text-sm">
                  Recibirás un email de confirmación en breve
                </p>
              </div>


              {/* Botones */}
              <div className="flex gap-3">

                <button
                  onClick={() => router.push("/prueba")}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Continuar comprando
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentGateway;