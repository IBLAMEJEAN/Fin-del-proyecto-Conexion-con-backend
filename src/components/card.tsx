// components/Card.tsx
import React from "react";
import Image from "next/image";

// Definimos las props que recibirá nuestro componente
interface CardProps {
  imageUrl: string;
  imageAlt: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, className }) => {
  return (
    <article>
      <div className={`card bg-base-100 w-full shadow-sm ${className}`}>
        <figure>
          {/* Usamos el componente Image de Next.js para optimizar la imagen */}
          <Image
            src={imageUrl}
            alt={""}
            width={400} // Ajusta el tamaño según sea necesario
            height={225} // Proporción 16:9
            className="rounded-t-box w-90 h-50 object-cover " // Aplica el borde redondeado solo en la parte superior
          />
        </figure>
      </div>
    </article>
  );
};

export default Card;
