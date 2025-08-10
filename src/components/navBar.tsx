import React, { ReactNode } from "react";

interface navbarProps {
  children?: ReactNode;
  className?: string;
}

export default function navBar({ children, className = "" }: navbarProps) {
  return (
    <div className={`navbar bg-base-100 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
