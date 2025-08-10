import LoginForm from "@/components/loginForm"; // ✅ Importación correcta (nota la mayúscula)
import PublicRoute from "../../components/publicRoute";

export default function Login() {
  return (
    <PublicRoute>
      <LoginForm />
    </PublicRoute>
  ); // ✅ Renderizando como componente JSX
}
