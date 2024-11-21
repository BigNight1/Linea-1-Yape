import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MetroyHora from "./MetroyHora.jsx";

const YapePage = () => {
  const location = useLocation();
  const saldo = location.state?.saldo || 0; // Obtener saldo del estado o establecer valor predeterminado
  const navigate = useNavigate();

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center bg-gray-100">
      <MetroyHora/>
      <h1 className="text-3xl font-bold mb-4 text-center">Paga con Yape</h1>
      <p className="text-lg mb-6">
        Escanea el código QR para pagar S/ {saldo.toFixed(2)}.
      </p>
      {/* Código QR */}
      <img src="/img/qr-code.webp" alt="" width={200}/>

      {/* Botón para regresar */}
      <button
        className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-md"
        onClick={() => navigate("/formapago")}
        aria-label="Regresar"
      >
        Regresar
      </button>
    </div>
  );
};

export default YapePage;
