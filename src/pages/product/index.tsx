import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Card from "../../components/card";

interface Producto {
  id: string | number;
  nombre: string;
  descripcion: string;
  precio: number;
  moneda: string;
  categoria: string;
  disponible: boolean;
  imageUrl?: string;
}

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [producto, setProducto] = useState<Producto | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:3001/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducto(data))
      .catch((err) => console.error("Error al obtener producto:", err));
  }, [id]);

  if (!producto) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-gray-500">Cargando producto...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-xl">
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <Card
            imageUrl={producto.imageUrl ?? ""}
            imageAlt={producto.nombre ?? ""}
            className="w-full h-64 mb-6"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{producto.nombre}</h2>
          <p className="text-gray-600 text-base mb-4">{producto.descripcion}</p>
          <p className="text-sm text-gray-500 mb-1">
            <span className="font-semibold">Categoría:</span> {producto.categoria}
          </p>
          <p className="text-sm text-gray-500 mb-1">
            <span className="font-semibold">Disponibilidad:</span>{" "}
            {producto.disponible ? (
              <span className="text-green-600 font-semibold">En stock</span>
            ) : (
              <span className="text-red-600 font-semibold">Agotado</span>
            )}
          </p>
          <span className="text-2xl font-bold text-blue-600 mb-4">
            {producto.precio} {producto.moneda}
          </span>
          <div className="flex gap-2 w-full">
            <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm transition-colors duration-300">
              Agregar al carrito
            </button>
            <button
              onClick={() => {
                const queryParams = new URLSearchParams({
                  id: producto.id.toString(),
                  nombre: producto.nombre,
                  descripcion: producto.descripcion,
                  precio: producto.precio.toString(),
                  moneda: producto.moneda,
                  categoria: producto.categoria,
                  disponible: producto.disponible.toString(),
                });
                router.push(`/payment?${queryParams.toString()}`);
              }}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm transition-colors duration-300 font-semibold"
            >
              Comprar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;