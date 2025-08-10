import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Login from "./login";
import PublicRoute from "../components/publicRoute";
import Dashboard from "./dashboard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
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
