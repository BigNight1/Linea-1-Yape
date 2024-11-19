import React from "react";

const Logos = () => {
  return (
    <div className="bg-[#792c26]">
      <div className="max-w-[800px] mx-auto flex justify-between items-center p-4 h-[130px]">
        <img
          src="/img/bandera.png"
          alt="bandera de peru"
          className="w-[120px]"
        />
        <img src="/img/indra.png" alt="logo de Indra" className="w-[150px]" />
      </div>
    </div>
  );
};

export default Logos;
