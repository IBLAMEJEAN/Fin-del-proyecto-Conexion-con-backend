import React from 'react';
import Card from '../../components/card';
import Router from 'next/router';

const ProductosPage = () => {
  // Array de productos de ejemplo
  const productos = [
    {
      id: 1,
      nombre: "Laptop Gaming",
      precio: "$1,299.99",
      imageUrl: "/images/team.jpg", // Usando una de tus imágenes existentes
      descripcion: "Laptop de alto rendimiento para gaming"
    },
    {
      id: 2,
      nombre: "Smartphone Pro",
      precio: "$899.99",
      imageUrl: "/images/angelopolis.png",
      descripcion: "Teléfono inteligente de última generación"
    },
    {
      id: 3,
      nombre: "Auriculares Wireless",
      precio: "$199.99",
      imageUrl: "/images/circuito.png",
      descripcion: "Auriculares inalámbricos con cancelación de ruido"
    },
    {
      id: 4,
      nombre: "Tablet Pro",
      precio: "$699.99",
      imageUrl: "/images/lineasDeNegocio.jpg",
      descripcion: "Tablet profesional para trabajo y entretenimiento"
    },
    {
      id: 5,
      nombre: "Smartwatch",
      precio: "$299.99",
      imageUrl: "/images/noticiasyPrensa.jpg",
      descripcion: "Reloj inteligente con monitoreo de salud"
    },
    {
      id: 6,
      nombre: "Cámara DSLR",
      precio: "$1,199.99",
      imageUrl: "/images/transparenciaYRendicionDeCuentas.jpeg",
      descripcion: "Cámara profesional para fotografía"
    },
    {
      id: 7,
      nombre: "Monitor 4K",
      precio: "$399.99",
      imageUrl: "/images/team.jpg",
      descripcion: "Monitor ultra HD de 27 pulgadas"
    },
    {
      id: 8,
      nombre: "Teclado Mecánico",
      precio: "$149.99",
      imageUrl: "/images/angelopolis.png",
      descripcion: "Teclado mecánico RGB para gaming"
    }
  ];

  const handleComprarAhora = (producto: any) => {
    // Extrae el número del precio (ej: "$1,299.99" → 1299.99)
    const amount = Number(producto.precio.replace(/[^0-9.]/g, ""));
    
    // Construye la URL con todos los parámetros del producto
    const queryParams = new URLSearchParams({
      amount: amount.toString(),
      title: producto.nombre,
      description: producto.descripcion,
      image: producto.imageUrl
    });
    
    Router.push(`/payment?${queryParams.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header de la página */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Nuestros Productos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de productos tecnológicos de alta calidad
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {productos.map((producto) => (
            <div key={producto.id} className="group cursor-pointer">
              {/* Componente Card */}
              <Card 
                imageUrl={producto.imageUrl}
                imageAlt={producto.nombre}
                className="hover:shadow-lg transition-shadow duration-300"
              />
              
              {/* Información del producto */}
              <div className="mt-4 p-4 bg-white rounded-b-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {producto.nombre}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {producto.descripcion}
                </p>
                <div className="flex flex-col gap-3">
                  <span className="text-xl font-bold text-blue-600 text-center">
                    {producto.precio}
                  </span>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm transition-colors duration-300">
                      Agregar al carrito
                    </button>
                    <button
                      onClick={() => handleComprarAhora(producto)}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm transition-colors duration-300 font-semibold"
                    >
                      Comprar ahora
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección adicional */}
        <div className="text-center mt-12">
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300">
            Ver más productos
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductosPage;