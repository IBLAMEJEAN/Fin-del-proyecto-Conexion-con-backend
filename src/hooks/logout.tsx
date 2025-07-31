import { useState } from "react";
import { useRouter } from "next/router";

const uselogout = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("info");
    window.location.href = "/login";
  };

  return { isLoggedOut, handleLogout };
};

export default uselogout;
