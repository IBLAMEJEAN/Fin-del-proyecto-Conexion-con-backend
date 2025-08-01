import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
//import useAuth from "../hooks/useAuth";

interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsClient(true); //sirve para asegurarse que el codigo solo ejecute del lado del cliente

    const token = localStorage.getItem("token");

    if(!token) {
      router.push("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if(!isClient) return null;

  return isAuthenticated ? <>{children}</> : null;
}

export default ProtectedRoute;
