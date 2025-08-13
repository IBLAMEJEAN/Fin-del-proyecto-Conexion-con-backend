import React, { useState } from "react";

// Interfaz para definir la estructura de una noticia
export interface Noticia {
  imagen: string;
  titulo: string;
  fecha: string;
  enlace: string;
}

// Props del componente principal
interface CarruselNoticiasProps {
  titulo?: string;
  subtitulo?: string;
  noticias: Noticia[];
  cardsPerView?: number;
  backgroundColor?: string;
}

const CarruselNoticias: React.FC<CarruselNoticiasProps> = ({
  titulo = "Obtén todas las noticias al momento",
  subtitulo = "NOTICIAS Y PRENSA",
  noticias = [],
  cardsPerView = 3,
  backgroundColor = "bg-gray-50",
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex + cardsPerView >= noticias.length ? 0 : prevIndex + cardsPerView
    );
  };

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === 0
        ? Math.max(0, noticias.length - cardsPerView)
        : Math.max(0, prevIndex - cardsPerView)
    );
  };

  const visibleNoticias: Noticia[] = noticias.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  // No renderizar si no hay noticias
  if (!noticias || noticias.length === 0) {
    return (
      <div className={`${backgroundColor} py-16 px-4`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">No hay noticias disponibles</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${backgroundColor} py-16 px-4`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-600 tracking-wider uppercase mb-2">
            {subtitulo}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">
            {titulo}
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Flecha izquierda - solo mostrar si hay más de 3 elementos */}
          {noticias.length > cardsPerView && (
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex === 0}
              type="button"
              aria-label="Ir a noticias anteriores"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Cards Container */}
          <div
            className={`overflow-hidden ${
              noticias.length > cardsPerView ? "px-16" : "px-4"
            }`}
          >
            <div className="flex gap-6 transition-transform duration-300 ease-in-out justify-center">
              {visibleNoticias.map((noticia: Noticia, index: number) => (
                <div key={index} className="flex-shrink-0 w-80">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Imagen */}
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={noticia.imagen}
                        alt={noticia.titulo}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(
                          e: React.SyntheticEvent<HTMLImageElement, Event>
                        ) => {
                          const target = e.target as HTMLImageElement;
                          target.src =
                            "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=400&h=250&fit=crop";
                        }}
                      />
                    </div>

                    {/* Contenido */}
                    <div className="p-6">
                      {/* Fecha y comentarios */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-red-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{noticia.fecha}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                          <span>Comentarios</span>
                        </div>
                      </div>

                      {/* Título */}
                      <h3 className="text-xl font-bold text-gray-900 mb-6 leading-tight">
                        {noticia.titulo}
                      </h3>

                      {/* Enlace Leer más */}
                      <a
                        href={noticia.enlace}
                        className="inline-flex items-center text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LEER MÁS
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flecha derecha - solo mostrar si hay más de 3 elementos */}
          {noticias.length > cardsPerView && (
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex + cardsPerView >= noticias.length}
              type="button"
              aria-label="Ir a noticias siguientes"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarruselNoticias;
