import React from "react";

const SelectPay = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center bg-gray-100">
      <div className="h-full w-full">
        {/* metro lima y hora */}
        <div className="bg-[#792c26] ">
          <div className="top flex justify-between items-center p-2 max-w-[950px] mx-auto ">
            <div>
              <h1 className="text-white text-2xl font-semibold">
                <span className="text-2xl font-bold">Metro</span> de Lima
              </h1>
            </div>
            <div className="text-white text-2xl font-bold">12:02:54</div>
          </div>
        </div>
        {/* saldo actual */}
        <div className="Saldo bg-[#792c26] ">
          <div className=" max-w-[600px] mx-auto flex items-center justify-between px-4 p-3">
            <h2 className="text-white font-semibold text-[1.5rem]">
              Saldo actual es : S/ 15.00
            </h2>
            <div className="bg-green-700 rounded-full px-4 py-2 cursor-pointer">
              <h2 className="font-semibold text-[1.3rem] text-black">
                Imprimir Saldo
              </h2>
            </div>
          </div>
        </div>
        {/* seleccione el monto */}
        <div className="bg-[#a15e69] ">
          <h1 className="text-3xl font-bold mb-6 p-4 text-white max-w-[650px] mx-auto">
            Seleccione el monto a cargar
          </h1>
          <div className="flex items-center  mb-8 max-w-[600px] mx-auto">
            <div className="">
              <button className="bg-[#75D22F] text-black py-2 rounded-full text-lg font-bold shadow-md w-[180px] my-5 border-4 border-white">
                S/ 5
              </button>
              <button className="bg-[#75D22F] text-black py-2 rounded-full text-lg font-bold shadow-md w-[180px]  border-4 border-white">
                S/ 20
              </button>
            </div>
            <div className="">
              <button className="bg-[#75D22F] text-black py-2 rounded-full text-lg font-bold shadow-md w-[180px] my-5 border-4 border-white">
                S/ 10
              </button>
              <button className="bg-[#75D22F] text-black py-2 rounded-full text-lg font-bold shadow-md w-[180px] border-4 border-white">
                S/ 50
              </button>
            </div>
            <div className="h-[100px]">
              <button className="bg-[#75D22F] text-black  py-1 rounded-3xl text-xl font-bold shadow-md col-span-2 h-full border-4 border-white">
                OTRO MONTO
              </button>
            </div>
          </div>
          <div className="flex justify-end	max-w-[800px] mx-auto mt-8">
            <button className="bg-[#d14646] text-white px-6 py-2 rounded-full text-lg font-bold shadow-md">
              Cancelar
            </button>
          </div>
        </div>

        {/* footer imagenes y indra */}
        <div className=" bg-[#792c26]  ">
          <div className="max-w-[800px] mx-auto flex justify-between items-center p-4 ">
            <img
              src="/img/bandera.png"
              alt="bandera de peru"
              className="w-[120px]"
            />
            <img
              src="/img/indra.png"
              alt="logo de Indra"
              className="w-[150px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPay;
