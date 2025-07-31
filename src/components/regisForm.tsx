import { useState } from "react";
import Link from "next/link";

function registerForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3005/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (!response.ok) {
        alert("Error al registrar usuario");
      }
      const data = await response.json();
      console.log("Respuesta del registro:", data);
      window.location.href = "/dashboard";
      localStorage.setItem(
        "info",
        JSON.stringify({
          id: data.id,
          name: data.name,
        })
      );
    } catch (error) {
      console.error("Error en registro:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Registro</h2>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Nombre:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre"
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

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded
       hover:bg-blue-600 transition mb-4"
        >
          Registrar
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
    </div>
  );
}

export default registerForm;
