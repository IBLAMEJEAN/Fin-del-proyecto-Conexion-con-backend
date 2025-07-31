import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "../hooks/useAuth";

interface PublicRouteProps {
  children: ReactNode;
}

function PublicRoute({ children }: PublicRouteProps) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

  return !isAuthenticated ? <>{children}</> : null;
}

export default PublicRoute;
