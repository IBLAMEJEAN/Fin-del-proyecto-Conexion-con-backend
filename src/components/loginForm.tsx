import { access } from "fs";
import Link from "next/link";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);

    if (!email || !password) {
      alert("Introduzca información");
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

    try {
      const response = await fetch("http://192.168.1.101:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password}),
      });
      if (!response.ok) {
        alert("Usuario o contraseña incorrectos");
        return;
      }
      
      const data = await response.json();
      console.log(data)

      if(data.access_token){
        localStorage.setItem("token", data.access_token);
        window.location.href = "/dashboard";
      } else {
        alert("No se recibió un token válido");
      }
    } catch (error) {
      console.error("Error en login:", error);
      alert("Error de conexion con el servidor");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl justify-center  p-2.5 m-1.5 font-bold mb-4 text-center">
          Iniciar sesión
        </h2>

        <div className="mb-4">
          <label className="blockmb-1 text-gray-700">Email:</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded 
            px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@correo.com"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Contraseña:</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded px-3 py-2 
            focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 
        rounded hover:bg-blue-600 transition mb-4"
        >
          Iniciar sesión
        </button>

        <Link href="/registrar">
          <button
            type="button"
            className="w-full text-sky-500 text-xs hover:text-sky-800 transition"
          >
            Registrarse
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
