import React from "react";
import RegisterForm from "@/components/regisForm";
import PublicRoute from "../../components/publicRoute";

export default function Registrar() {
  return (
    <PublicRoute>
      <RegisterForm />
    </PublicRoute>
  );
}
