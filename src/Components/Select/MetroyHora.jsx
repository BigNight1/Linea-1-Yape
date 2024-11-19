import React from "react";
import { useEffect, useState } from "react";

const MetroyHora = () => {
  const [hora, setHora] = useState("");

  useEffect(() => {
    const actualizarHora = () => {
      // Obtener la hora actual en la zona horaria de Perú
      const now = new Date();
      const horaPeru = now.toLocaleTimeString("es-PE", {
        timeZone: "America/Lima",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false, // Formato de 24 horas
      });
      setHora(horaPeru);
    };

    // Actualizar cada segundo
    const intervalo = setInterval(actualizarHora, 1000);

    // Limpiar el intervalo cuando se desmonte el componente
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="bg-[#792c26]">
      <div className="top flex justify-between items-center p-2 max-w-[950px] mx-auto ">
        <div>
          <h1 className="text-white text-2xl font-semibold">
            <span className="text-2xl font-bold">Metro</span> de Lima
          </h1>
        </div>
        <div className="text-white text-2xl font-bold">{hora}</div>
      </div>
    </div>
  );
};

export default MetroyHora;
