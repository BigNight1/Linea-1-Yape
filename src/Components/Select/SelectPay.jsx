import React from "react";

const SelectPay = () => {
  return (
    <div>
      <div className="top flex justify-between bg-[#792c26]">
        <div className="pl-3">
          <h1 className="text-white"><span>Metro</span> de Lima</h1>
        </div>
        <div className="pr-3 text-white">12:02:54</div>
      </div>
      <div className="Saldo flex justify-between  bg-[#792c26]">
        <div>
          <h2 className="text-white">Saldo actual es : S/ 15.00</h2>
        </div>
        <div className="pr-3">
          <h2>Imprimir Saldo</h2>
        </div>
      </div>
      <div className="bg-[#a15e69]">
        <div>
          <h1 className="text-white">Seleccione el monto a cargar</h1>
        </div>
        <div>
          <div>
            <div>
              <span>S/5</span>
            </div>
            <div>
              <span>S/10</span>
            </div>
            <div>
              <span>S/20</span>
            </div>
            <div>
              <span>S/50</span>
            </div>
          </div>
          <div>
            <h2>OTRO MONTO</h2>
          </div>
        </div>
        <div>
          <button>Cancelar</button>
        </div>
      </div>
      <div className="flex justify-between bg-[#792c26]">
        <div className="pl-3">
          <img
            src="/img/bandera.png"
            alt="bandera de peru"
            className="w-[120px]"
          />
        </div>
        <div className="pr-3">
          <img src="/img/indra.png" alt="logo de Indra" className="w-[150px]" />
        </div>
      </div>
    </div>
  );
};

export default SelectPay;
