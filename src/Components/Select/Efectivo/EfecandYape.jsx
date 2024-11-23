import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Importar useLocation

const EfecandYape = () => {
  const location = useLocation();
  const saldo = location.state?.saldo || 0; // Obtener saldo del estado o establecer valor predeterminado
  const navigate = useNavigate();

  const handleYape = () => {
    // Navegar a /yapeqr con el saldo como estado
    navigate("/yapeqr", { state: { saldo, qrData: "datos_del_qr" } });
  };

  const BackSelect = () => {
    navigate("/");
  };

  const colors = {
    saldoBg: "#792c26",
    formaPagoBg: "#a15e69",
    efectivoBg: "bg-lime-500",
    yapeBg: "bg-[#572364]",
    cancelarBg: "bg-[#FF003F]",
  };

  return (
    <>
      {/* Saldo Puesto */}
      <div className={`Saldo bg-[${colors.saldoBg}]`}>
        <div className="max-w-[600px] mx-auto flex items-center justify-center px-4 py-3">
          <h2 className="text-white font-semibold text-[1.5rem] text-center">
            Saldo Puesto: {saldo.toFixed(2)}
          </h2>
        </div>
      </div>

      {/* Forma de Pago */}
      <div className={`bg-[${colors.formaPagoBg}] h-[375px]`}>
        <div className="h-full flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-white p-4 text-center">
            Seleccione Forma de Pago
          </h1>

          <div className="w-full max-w-[600px] flex flex-col gap-4">
            <button
              className={`${colors.efectivoBg} text-white font-bold py-2 rounded-md hover:opacity-90`}
              aria-label="Pagar con efectivo"
            >
              EFECTIVO
            </button>
            <button
              onClick={handleYape}
              className={`${colors.yapeBg} text-white font-bold py-2 rounded-md hover:opacity-90`}
              aria-label="Pagar con Yape"
            >
              YAPE
            </button>
            <div className="text-white font-bold py-2 rounded-md hover:opacity-90 flex justify-end">
              <button
                className={`${colors.cancelarBg} p-3 rounded-md`}
                onClick={BackSelect}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EfecandYape;
