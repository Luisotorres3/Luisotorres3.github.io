import React, { useState } from "react";

export default function BookCard({ item, tipo }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`book-card ${isOpen ? "open" : ""}`}
      onClick={toggleOpen}
      style={{
        cursor: "pointer",
        padding: "20px",
        margin: "10px 0",
        backgroundColor: "rgba(0,0,0,0.1)",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        transition: "transform 0.4s ease-in-out",
      }}
    >
      {!isOpen ? (
        <div className="card-content flex flex-row items-center">
          <img
            src={item.logo}
            alt={item.institucion || item.empresa}
            className="h-11 max-w-10 mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold">
              {tipo === "estudio" ? item.institucion : item.empresa}
            </h3>
            <p className="text-sm">
              {tipo === "estudio" ? item.anio : item.fechas}
            </p>
          </div>
        </div>
      ) : (
        <div className="card-opened-content p-4">
          <h3 className="text-xl font-bold">
            {tipo === "estudio" ? item.titulo : item.puesto}
          </h3>
          <p className="text-md font-semibold">
            {tipo === "estudio" ? item.institucion : item.empresa}
          </p>
          <p className="text-sm mt-2">{item.descripcion}</p>
          <button
            className="mt-4 text-blue-600 hover:underline"
            onClick={(e) => {
              e.stopPropagation();
              toggleOpen();
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
