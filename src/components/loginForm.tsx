import Link from "next/link";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !email) {
      alert("Introduzca información");
      return localStorage.removeItem("info");
    }
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Correo no válido");
      localStorage.removeItem("info");
      return;
    }
    if (/\s/.test(password)) {
      alert("La contraseña no debe contener espacios");
      localStorage.removeItem("info");
      return;
    }

    if (password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres");
      localStorage.removeItem("info");
      return;
    }

    try {
      const response = await fetch("http://localhost:3005/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (!response.ok) {
        alert("Usuario o contraseña incorrectos");
      }

      const data = await response.json();
      localStorage.setItem(
        "info",
        JSON.stringify({
          id: data.id,
          name: data.name,
        })
      );
      console.log("Respuesta del login:", data);
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Error en login:", error);
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
