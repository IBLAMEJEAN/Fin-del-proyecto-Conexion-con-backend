import React from "react";
import registerForm from "@/components/regisForm";
import PublicRoute from "../../components/publicRoute";

export default function Registrar() {
  return <PublicRoute> {registerForm()}</PublicRoute>;
}
