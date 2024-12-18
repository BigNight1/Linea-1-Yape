import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SelectPay = () => {
  const [saldo, setSaldo] = useState(0); // Estado para el saldo seleccionado
  const navigate = useNavigate(); // Hook para navegar entre rutas

  const handleSelectMonto = (monto) => {
    navigate("/formapago", { state: { saldo: monto } }); // Navega con el monto seleccionado
  };

  const colors = {
    saldoBg: "#792c26",
    montoBg: "#a15e69",
    botonBg: "#75D22F",
    cancelarBg: "#d14646",
  };

  const commonButtonClass = "py-3 rounded-3xl text-xl font-bold shadow-md";

  return (
    <div className=" flex flex-col bg-gray-100">
      <main className="flex-grow w-full">
        {/* Saldo actual */}
        <section style={{ backgroundColor: colors.saldoBg }} className="py-3">
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
        <section
          style={{ backgroundColor: colors.montoBg }}
          className=" flex flex-col justify-center items-center"
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold p-4 text-white max-w-[650px] mx-auto">
              Seleccione el monto a cargar
            </h1>

            <div className="grid grid-cols-2 gap-4 max-w-[600px] mx-auto">
              {[5, 10, 20, 50].map((monto, index) => (
                <button
                  key={index}
                  className={`bg-[#75D22F] text-black ${commonButtonClass}`}
                  onClick={() => handleSelectMonto(monto)}
                >
                  S/ {monto}
                </button>
              ))}
              <button
                className={`col-span-2 bg-[#75D22F] ${commonButtonClass}`}
              >
                OTRO MONTO
              </button>
            </div>
          </div>

          {/* Botón cancelar */}
          <div className="flex justify-end max-w-[800px] w-full mt-8">
            <button
              style={{ backgroundColor: colors.cancelarBg }}
              className="text-white px-6 py-2 rounded-full text-lg font-bold shadow-md"
            >
              Cancelar
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SelectPay;

 

