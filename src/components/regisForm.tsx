import { useState } from "react";
import Link from "next/link";

function registerForm() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState({
    city: "",
    state: "",
    street: "",
    cologne: "",
    postalCode: "",
    countryCode: "",
  });

  // Nuevo estado para manejar los mensajes de error de forma más amigable
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !lastName || !birthDate || !phoneNumber) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Correo no válido");
      return;
    }

    if (/\s/.test(password)) {
      alert("La contraseña no debe contener espacios");
      return;
    }

    if (password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres");
      return;
    }

    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null); // Limpiar cualquier error anterior

    // Validación de dirección: todos los campos obligatorios y el código de país debe tener 2 caracteres
    if (!address.city || !address.state || !address.street || !address.postalCode || !address.cologne || !address.countryCode || address.countryCode.length !== 2) {
      setErrorMessage("Todos los campos de dirección son obligatorios y el Código de País debe tener 2 caracteres (ej. MX)");
      return;
    }

    try {
      const dataToSend = JSON.stringify({
        name: name,
        lastName: lastName,
        birthDate: birthDate,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        address: address
      });

      const response = await fetch("http://192.168.1.105:3000/create-customer/openPayClient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: dataToSend
      });

      // ⚡ Manejo de error con mensaje detallado
      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.message) {
          alert(`Informacion del error es: ${errorData.message[0]}`);
        } else {
          alert(errorData.message || "Error desconocido en el registro");
        }
        return;
      }

      // Si la respuesta es exitosa
      const data = await response.json();

      if (data.accessToken) {
        localStorage.setItem("token", data.accessToken);
        window.location.href = "/login";
      } else {
        setErrorMessage(data.message || "Registro completado, pero no se recibió el token.");
      }
    } catch (error) {
      console.error("Error en registro:", error);
      setErrorMessage("Error de conexión con el servidor. Por favor, revisa tu conexión a internet.");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/images/fondoRegistro.webp')" }}></div>

      {step === 1 ? (
        <form
          onSubmit={handleNext}
          className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm z-10"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Registro - Paso 1</h2>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Nombre:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Juan Carlos"
            ></input>
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Apellido(s):</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Perez Lopez"
            ></input>
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Fecha de Nacimiento:</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              placeholder="Fecha de Nacimiento"
            ></input>
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Email:</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ejemplo@correo.com"
            ></input>
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Contraseña:</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            ></input>
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Numero de telefono:</label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="123-456-7890"
            ></input>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded
         hover:bg-blue-600 transition mb-4"
          >
            Siguiente
          </button>

          <Link href="/login">
            <button
              type="button"
              className="w-full text-sky-500 text-xs
             hover:text-sky-800 transition"
            >
              Iniciar sesión
            </button>
          </Link>
        </form>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm z-10"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Registro - Paso 2</h2>
          <p className="text-sm text-gray-600 mb-4 text-center">Información de dirección</p>

          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Ciudad:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
              placeholder="Ciudad"
            ></input>
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Estado/Provincia:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
              placeholder="Estado o Provincia"
            ></input>
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Dirección Línea 1:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={address.street}
              onChange={(e) => setAddress({ ...address, street: e.target.value })}
              placeholder="Calle y número"
            ></input>
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Dirección Línea 2:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={address.cologne}
              onChange={(e) => setAddress({ ...address, cologne: e.target.value })}
              placeholder="Colonia, apartamento, etc."
            ></input>
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Código Postal:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={address.postalCode}
              onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
              placeholder="12345"
            ></input>
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Código de País:</label>
            <input
              type="text"
              inputMode="text"
              maxLength={2}
              pattern="[A-Za-z]{2}"
              title="Introduce 2 letras (ej. MX)"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={address.countryCode}
              onChange={(e) =>
                // Forzar mayúsculas y limitar a 2 caracteres
                setAddress({ ...address, countryCode: e.target.value.toUpperCase().slice(0, 2) })
              }
              placeholder="MX"
            />
            <p className="text-xs text-gray-500 mt-1">Usa 2 letras, por ejemplo: MX</p>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded
         hover:bg-green-600 transition mb-4"
          >
            Completar Registro
          </button>

          <button
            type="button"
            onClick={() => setStep(1)}
            className="w-full text-gray-500 text-xs
           hover:text-gray-800 transition"
          >
            Volver al paso anterior
          </button>
        </form>
      )}
    </div>
  );
}

export default registerForm;
