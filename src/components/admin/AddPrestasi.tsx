import React from "react";
import { Link } from "react-router-dom";

export default function AddPrestasi(): React.JSX.Element {
  return (
    <>
      <div className="py-8 bg-slate-700 sticky top-0">
        <h1 className="mx-20 text-2xl text-white font-semibold">
          Tambah Prestasi
        </h1>
      </div>
      <div className="mt-10 mx-20">
        <Link to={"/dashboard"}>
          <button className="bg-slate-600 text-white px-4 py-2 rounded-lg outline-none focus:ring-4 transition-all ring-slate-300">
            Kembali
          </button>
        </Link>
      </div>
    </>
  );
}
