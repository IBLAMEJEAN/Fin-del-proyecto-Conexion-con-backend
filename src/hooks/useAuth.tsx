import { useState, useEffect } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedInfo = localStorage.getItem("info");
    if (storedInfo) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []); // Agregado array de dependencias vacío

  return { isAuthenticated };
};

export default useAuth;
