import { access } from "fs";
import uselogout from "../hooks/logout";
import { useState, useEffect } from "react";

function dashboard() {
  const { handleLogout } = uselogout();
  // const [userInfo, setUserInfo] = useState({ id: "", name: "", access: "" });

  //  useEffect(() => {
  //   const storedUserInfo = localStorage.getItem("userInfo");
  //   if (storedUserInfo) {
  //     try {
  //       const parsedInfo = JSON.parse(storedUserInfo);
  //       setUserInfo(parsedInfo);
  //     } catch (error) {
  //       console.error("Error al parsear información del usuario:", error);
  //     }
  //   }
  // }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Dashboard</h2>
        <p className="text-center text-gray-700 p-2">Bienvenido a tu cuenta</p>
        <div className="flex items-center justify-center">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white 
      px-4 py-2 
      flex items-center justify-center 
      rounded hover:bg-red-600 transition"
          >
            cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
}
export default dashboard;
