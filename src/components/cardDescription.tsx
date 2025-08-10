import React from "react";

// Definimos las props que recibirá nuestro componente
interface CardDescriptionProps {
  className?: string;
  children?: React.ReactNode;
  text?: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({
  className,
  children,
  text,
}) => {
  return (
    <article>
      <div className={`card bg-white w-full shadow-sm p-4 ${className}`}>
        {text && <p>{text}</p>}
        {children}
      </div>
    </article>
  );
};

export default CardDescription;
