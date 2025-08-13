import { useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "../hooks/useAuth";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated === true) {
      router.replace("/dashboard");
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated === true) return null;
  return <>{children}</>;
};

export default PublicRoute;
