import { useState } from "react";
import { useRouter } from "next/router";

const uselogout = () => {
  const router = useRouter();

  const handleLogout = () => {
    //Elimina el token
    localStorage.removeItem("token");

    //Manda al login
    router.push("/login");
  };

  return { handleLogout };
};

export default uselogout;
