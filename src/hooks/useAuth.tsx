import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface UserInfo {
  userId: string;
  username?: string;
  email?: string;
  roles?: string[];
  exp: number;
  customerId?: string;
}

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [user, setUser] = useState<UserInfo | null>(null);
  const router = useRouter();

  // Función para decodificar Base64URL - Versión simplificada
  const base64UrlDecode = (str: string): string => {
    str = str.replace(/-/g, "+").replace(/_/g, "/");
    while (str.length % 4) {
      str += "=";
    }
    try {
      // Para la mayoría de JWTs, esto funcionará bien
      return decodeURIComponent(
        atob(str)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
    } catch (e) {
      throw new Error("Error al decodificar");
    }
  };

  // Función para decodificar JWT y obtener info del usuario
  const getUserFromToken = (token: string): UserInfo | null => {
    try {
      const parts = token.split(".");
      if (parts.length !== 3) return null;

      const payload = JSON.parse(base64UrlDecode(parts[1]));

      // Verificar si el token ha expirado
      const currentTime = Math.floor(Date.now() / 1000);
      if (payload.exp && payload.exp < currentTime) {
        localStorage.removeItem("token"); // Limpiar token expirado
        return null;
      }

      return {
        userId: payload.sub || payload.id || payload.userId,
        username: payload.username || payload.name,
        email: payload.email,
        roles: payload.roles || payload.role,
        exp: payload.exp,
        customerId: payload.customerId,
      };
    } catch (error) {
      console.error("Error decodificando token:", error);
      return null;
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const userInfo = getUserFromToken(token);

      if (userInfo) {
        setIsAuthenticated(true);
        setUser(userInfo);
      } else {
        // Token inválido o expirado
        setIsAuthenticated(false);
        setUser(null);
        const protectedRoutes = ["/profile", "/settings", "/admin"];
        if (protectedRoutes.includes(router.pathname)) {
          router.push("/login");
        }
      }
    } else {
      setIsAuthenticated(false);
      setUser(null);
      const protectedRoutes = ["/profile", "/settings", "/admin"];
      if (protectedRoutes.includes(router.pathname)) {
        router.push("/login");
      }
    }
  }, [router]);

  const login = (token: string) => {
    localStorage.setItem("token", token);
    const userInfo = getUserFromToken(token);


    if (userInfo) {
      setIsAuthenticated(true);
      setUser(userInfo);
      router.push("/dashboard");
    } else {
      console.error("Token inválido en login");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
    router.push("/dashboard");
  };

  return {
    isAuthenticated,
    user,
    login,
    logout,
  };
};

export default useAuth;
