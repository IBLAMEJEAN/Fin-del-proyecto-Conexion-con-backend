import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if(token){
      //aqui agregar validaciones 
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);

      //redirigir si no esta autenticado
      if (router.pathname !== "/login" && router.pathname !== "/registrar"){
        router.push("/login");
      }
    }
  }, [router]);

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    router.push("/login");
  };

  return {isAuthenticated, logout};
};

export default useAuth;
