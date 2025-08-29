import React, { useEffect, useState } from "react";
import Card from "../../components/card";
import Link from "next/link";

interface Producto {
  id: string | number;
  nombre: string;
  descripcion: string;
  imageUrl?: string;
  cantidad: number;
  precio: number;
  moneda: string;
  categoria: string;
  disponible: boolean;
}

const DESCRIPCION_LIMITE = 100;

const getInitialVisible = () => {
  if (typeof window !== "undefined") {
    if (window.innerWidth < 768) return 4; // sm
    return 8; // md y lg
  }
  return 8;
};

const ProductosPage = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [expandido, setExpandido] = useState<{ [id: string]: boolean }>({});
  const [visibleCount, setVisibleCount] = useState(getInitialVisible());
  const [initialVisible, setInitialVisible] = useState(getInitialVisible());

  // Ajusta visibleCount si el usuario cambia el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      const initial = window.innerWidth < 768 ? 4 : 8;
      setInitialVisible(initial);
      setVisibleCount((prev) => (prev > initial ? prev : initial));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Obtención de todos los productos desde la API
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error al obtener productos:", err));
  }, []);

  const handleMostrarMas = (id: string | number) => {
    setExpandido((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleVerMasProductos = () => {
    setVisibleCount((prev) => Math.min(prev + 4, productos.length));
  };

  const handleVerMenosProductos = () => {
    setVisibleCount(initialVisible);
  };

  const productosVisibles = productos.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header de la página */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Nuestros Productos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de productos tecnológicos de alta calidad
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {productosVisibles.map((producto) => {
            const isLong = producto.descripcion.length > DESCRIPCION_LIMITE;
            const isExpanded = expandido[producto.id];
            const descripcionCorta =
              isLong && !isExpanded
                ? producto.descripcion.slice(0, DESCRIPCION_LIMITE) + "..."
                : producto.descripcion;

            return (
              <div
                key={producto.id}
                className="group cursor-pointer flex flex-col h-full"
              >
                {/* Componente Card */}

                <Card
                  imageUrl={producto.imageUrl ?? ""}
                  imageAlt={producto.nombre ?? ""}
                  className="hover:shadow-lg transition-shadow duration-300 h-56"
                />
                {/* Información del producto */}
                <div
                  className={`mt-4 p-4 bg-white rounded-b-lg shadow-sm flex flex-col flex-1 transition-all duration-300`}
                  style={{
                    minHeight: isLong && !isExpanded ? "260px" : undefined,
                  }}
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {producto.nombre}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {descripcionCorta}
                    {isLong && (
                      <button
                        className="ml-2 text-blue-500 hover:underline text-xs"
                        onClick={() => handleMostrarMas(producto.id)}
                      >
                        {isExpanded ? "Mostrar menos" : "Mostrar más"}
                      </button>
                    )}
                  </p>
                  <div className="flex flex-col gap-3 mt-auto">
                    <span className="text-xl font-bold text-blue-600 text-center">
                      {producto.precio} {producto.moneda}
                    </span>
                    {producto.disponible ? (
                      <span className="flex-1 text-sm text-green-600 px-3 py-2 rounded-lg text-center">
                        {producto.cantidad} En stock
                      </span>
                    ) : (
                      <span className="flex-1 text-sm text-red-600 px-3 py-2 rounded-lg text-center">
                        Agotado
                      </span>
                    )}
                    <div className="flex gap-2">
                      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                        Agregar al carrito
                      </button>
                      {producto.disponible && (
                        <Link
                          href={{
                            pathname: "/payment",
                            query: {
                              id: producto.id,
                              nombre: producto.nombre,
                              descripcion: producto.descripcion,
                              imageUrl: producto.imageUrl,
                              cantidad: producto.cantidad,
                              precio: producto.precio,
                              moneda: producto.moneda,
                              categoria: producto.categoria,
                              disponible: producto.disponible,
                            },
                          }}
                          passHref
                        >
                          <button className="w-full bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                            Comprar ahora
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Botones de ver más/ver menos */}
        <div className="text-center mt-12 flex flex-col sm:flex-row justify-center gap-4">
          {visibleCount < productos.length && (
            <button
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300"
              onClick={handleVerMasProductos}
            >
              Ver más productos
            </button>
          )}
          {visibleCount > initialVisible && (
            <button
              className="w-full sm:w-auto bg-gray-500 hover:bg-gray-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300"
              onClick={handleVerMenosProductos}
            >
              Ver menos productos
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductosPage;
