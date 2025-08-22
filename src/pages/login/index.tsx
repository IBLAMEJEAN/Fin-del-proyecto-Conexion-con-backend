import LoginForm from "@/components/loginForm"; 
import PublicRoute from "../../components/publicRoute";

export default function Login() {
  return (
    <PublicRoute>
      <LoginForm />
    </PublicRoute>
  ); 
}
