import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      const publicRoutes = ["/login", "/registrar"];
      if (!publicRoutes.includes(router.pathname)) {
        router.push("/login");
      }
    }
  }, [router]);

  // función para manejar el login
  const login = (token: string) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
    router.push("/dashboard");
  };

  // ✅ Ya existente: logout
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    router.push("/login");
  };

  return { isAuthenticated, login, logout };
};

export default useAuth;
