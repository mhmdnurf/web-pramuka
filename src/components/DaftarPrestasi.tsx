import React from "react";
import SliderPrestasi from "./SliderPrestasi";
import usePrestasi from "../hooks/usePrestasi";

export default function DaftarPrestasi(): React.JSX.Element {
  const { dataPrestasi, isLoading: isLoadingPrestasi } = usePrestasi();
  return (
    <>
      <div className="bg-amber-300 bg-opacity-30 sm:pt-10" id="daftar-prestasi">
        <p className="sm:text-6xl text-2xl font-extrabold uppercase text-zinc-800 font-nunito text-center sm:pt-12 pt-6 sm:pb-6">
          Daftar Prestasi
        </p>
        {isLoadingPrestasi ? (
          <p className="text-center text-lg text-zinc-800 font-nunito">
            Loading...
          </p>
        ) : (
          <SliderPrestasi data={dataPrestasi} />
        )}
      </div>
    </>
  );
}
