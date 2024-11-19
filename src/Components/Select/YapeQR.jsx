import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QRCode from "qrcode"; // Importa la librería qrcode
import { useEffect } from "react";

const YapePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const saldo = location.state?.saldo || 0; // Obtén el saldo desde el estado

  // Generar el código QR cuando el componente se monte
  useEffect(() => {
    const qrData = `Pago por Yape - Monto: S/ ${saldo.toFixed(2)}`;
    QRCode.toDataURL(qrData, { width: 200 })
      .then((url) => setQrCodeUrl(url))
      .catch((err) => console.error("Error al generar QR:", err));
  }, [saldo]);

  return (
    <div className="h-[100vh] flex flex-col items-ceXnter justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-center">Paga con Yape</h1>
      <p className="text-lg mb-6">
        Escanea el código QR para pagar S/ {saldo.toFixed(2)}.
      </p>
      {/* Código QR */}
      <QRCode value={qrData} size={200} />

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
