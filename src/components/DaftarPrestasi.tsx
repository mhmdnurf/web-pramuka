import React from "react";
import SliderPrestasi from "./SliderPrestasi";
import usePrestasi from "../hooks/usePrestasi";

export default function DaftarPrestasi(): React.JSX.Element {
  const { dataPrestasi, isLoading: isLoadingPrestasi } = usePrestasi();
  return (
    <>
      <div className="bg-amber-300 bg-opacity-30 pt-10" id="daftar-prestasi">
        <p className="text-6xl font-extrabold uppercase text-zinc-800 font-nunito text-center pt-12 pb-6">
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
