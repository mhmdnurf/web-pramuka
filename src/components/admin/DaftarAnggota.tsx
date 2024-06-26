import React from "react";
import { Link } from "react-router-dom";
import { FaPencil } from "react-icons/fa6";
import useAnggota from "../../hooks/useAnggota";

export default function DaftarAnggota(): React.JSX.Element {
  const { jumlahLakiLaki, jumlahPerempuan } = useAnggota();
  return (
    <>
      <div className="mx-4 sm:mx-20 my-10 max-w-xs sm:max-w-[400px] border-4 p-4 rounded-xl flex flex-col sm:flex-row justify-between">
        <div className="flex justify-between items-start flex-col">
          <h1 className="font-bold text-slate-800 text-xl">
            Total Daftar Anggota
          </h1>
          <div className="p-4 bg-slate-500 rounded-md w-full my-2">
            <p className="text-white text-center font-semibold text-xl">
              {parseInt(jumlahLakiLaki) + parseInt(jumlahPerempuan)}
            </p>
          </div>
          <h1 className="font-bold text-slate-800 text-xl">
            Total Anggota Laki-Laki
          </h1>
          <div className="p-4 bg-sky-500 rounded-md w-full my-2">
            <p className="text-white text-center font-semibold text-xl">
              {jumlahLakiLaki}
            </p>
          </div>
          <h1 className="font-bold text-slate-800 text-xl">
            Total Anggota Perempuan
          </h1>
          <div className="p-4 bg-red-500 rounded-md w-full my-2">
            <p className="text-white text-center font-semibold text-xl">
              {jumlahPerempuan}
            </p>
          </div>
        </div>
        <div className="mt-4 sm:mt-0">
          <Link to={"/daftar-anggota"}>
            <button className="bg-amber-600 text-white rounded-md p-2 w-full outline-none focus:ring-4 ring-amber-300 flex justify-center items-center">
              <FaPencil size={25} />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
