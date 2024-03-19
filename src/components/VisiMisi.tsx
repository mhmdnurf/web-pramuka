import React from "react";

export default function VisiMisi() {
  return (
    <>
      <div className="mx-20">
        <div className="header mb-20">
          <p className="text-center font-bold text-3xl uppercase underline">
            Visi & Misi
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-1/2 bg-blue-100 p-8">
            <p className="text-2xl font-bold">Visi</p>
            <p className="text-justify font-light text-sm">
              Menjadi lembaga pendidikan yang unggul dan berwawasan lingkungan
              yang mampu menghasilkan lulusan yang berkualitas, berdaya saing
              tinggi, dan berjiwa kepemimpinan yang berlandaskan nilai-nilai
              keislaman.
            </p>
          </div>
          <div className="w-1/2 p-8 bg-red-100">
            <p className="text-2xl font-bold">Misi</p>
          </div>
        </div>
      </div>
    </>
  );
}
