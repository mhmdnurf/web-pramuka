import React from "react";
import useAnggota from "../hooks/useAnggota";

export default function Statistic(): React.JSX.Element {
  const { jumlahLakiLaki, jumlahPerempuan, isLoading } = useAnggota();
  return (
    <>
      <div className="w-full bg-zinc-900 justify-center items-center flex">
        <div className="flex justify-around w-full sm:p-10 py-6 px-1">
          <div className="">
            <h1 className="text-white text-center text-base sm:text-6xl font-semibold">
              {isLoading
                ? "Loading..."
                : parseInt(jumlahLakiLaki) + parseInt(jumlahPerempuan)}
            </h1>
            <p className="text-white text-sm sm:text-base text-center font-nunito font-semibold mt-2">
              Anggota Aktif
            </p>
          </div>
          <div className="border"></div>
          <div>
            <h1 className="text-white text-center text-base sm:text-6xl font-semibold">
              {isLoading ? "Loading..." : parseInt(jumlahLakiLaki)}
            </h1>
            <p className="text-white text-center text-sm sm:text-base font-nunito font-semibold mt-2">
              Laki-Laki
            </p>
          </div>
          <div className="border"></div>
          <div>
            <h1 className="text-white text-center text-base sm:text-6xl font-semibold">
              {isLoading ? "Loading..." : parseInt(jumlahPerempuan)}
            </h1>
            <p className="text-white text-center text-sm sm:text-base font-nunito font-semibold mt-2">
              Perempuan
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
