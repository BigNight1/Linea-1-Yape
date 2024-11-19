import React from "react";
import MetroyHora from "./MetroyHora.jsx";
import Logos from "./Logos.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SelectPay = () => {
  const [saldo, setSaldo] = useState(0); // Estado para el saldo seleccionado
  const navigate = useNavigate(); // Hook para navegar entre rutas

  const handleSelectMonto = (monto) => {
    // Navega a /formapago con el monto seleccionado
    navigate("/formapago", { state: { saldo: monto } });
  };
  const colors = {
    saldoBg: "#792c26",
    montoBg: "#a15e69",
    botonBg: "#75D22F",
    cancelarBg: "#d14646",
  };

  const buttonClass = `py-2 rounded-full text-lg font-bold shadow-md border-4 border-white`;

  return (
    <div className="h-[100vh] flex flex-col bg-gray-100">
      {/* Metro Lima y Hora */}
      <MetroyHora />

      <main className="flex-grow w-full">
        {/* Saldo actual */}
        <section className={`Saldo bg-[${colors.saldoBg}] py-3`}>
          <div className="max-w-[600px] mx-auto flex items-center justify-between px-4">
            <h2 className="text-white font-semibold text-[1.5rem]">
              Saldo actual: S/ 15.00
            </h2>
            <button
              className="bg-green-700 rounded-full px-4 py-2 cursor-pointer"
              aria-label="Imprimir saldo"
            >
              <h2 className="font-semibold text-[1.3rem] text-black">
                Imprimir Saldo
              </h2>
            </button>
          </div>
        </section>

        {/* Selección del monto */}
        <section className={`bg-[${colors.montoBg}] py-8`}>
          <h1 className="text-3xl font-bold p-4 text-white text-center max-w-[650px] mx-auto">
            Seleccione el monto a cargar
          </h1>

          <div className="grid grid-cols-2 gap-4 max-w-[600px] mx-auto">
            {/* Botones para seleccionar montos */}
            {[5, 10, 20, 50].map((monto, index) => (
              <button
              key={index}
              className={`bg-[${colors.botonBg}] text-black ${buttonClass}`}
              onClick={() => handleSelectMonto(monto)} // Redirigir con el monto seleccionado
              aria-label={`Seleccionar S/ ${monto}`}
            >
              S/ {monto}
            </button>
            ))}
            <button
              className={`col-span-2 bg-[${colors.botonBg}] py-3 rounded-3xl text-xl font-bold shadow-md`}
              aria-label="Seleccionar otro monto"
            >
              OTRO MONTO
            </button>
          </div>

          {/* Botón cancelar */}
          <div className="flex justify-end max-w-[800px] mx-auto mt-8">
            <button
              className={`bg-[${colors.cancelarBg}] text-white px-6 py-2 rounded-full text-lg font-bold shadow-md`}
              aria-label="Cancelar operación"
            >
              Cancelar
            </button>
          </div>
        </section>
      </main>

      {/* Footer con logos */}
      <footer>
        <Logos />
      </footer>
    </div>
  );
};

export default SelectPay;
