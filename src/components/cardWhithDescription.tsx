import React from "react";
import Image from "next/image";

// Definimos las props que recibirá nuestro componente
interface CardWithDescriptionProps {
  imageUrl: string;
  imageAlt: string;
  className?: string;
  children?: React.ReactNode;
  text?: string;
  gap?: "small" | "medium" | "large"; // Para controlar la separación
}

const CardWithDescription: React.FC<CardWithDescriptionProps> = ({
  imageUrl,
  imageAlt,
  className = "",
  children,
  text,
  gap = "medium",
}) => {
  // Clases para la separación
  const getGapClass = () => {
    switch (gap) {
      case "small":
        return "space-y-2";
      case "large":
        return "space-y-6";
      default:
        return "space-y-4"; // medium
    }
  };

  return (
    <article className={`${getGapClass()} ${className}`}>
      {/* Imagen */}
      <div className="card bg-base-100 w-full shadow-sm">
        <figure>
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={400}
            height={225}
            className="rounded-t-box w-full h-50 object-cover"
          />
        </figure>
      </div>

      {/* Cuadro blanco con texto - mismo ancho que la imagen */}
      <div className="card bg-white w-full h-23 shadow-sm p-4">
        {text && <p>{text}</p>}
        {children}
      </div>
    </article>
  );
};

export default CardWithDescription;
