import Image from "next/image";
import { Inter } from "next/font/google";
import Login from "./login";
import PublicRoute from "../components/publicRoute";
import Dashboard from "./dashboard";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    // <PublicRoute>
    <Dashboard />
    // </PublicRoute>
  );
}
