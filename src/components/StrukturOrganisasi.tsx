import React from "react";
import "../organisasi.css";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import useOrganisasi from "../hooks/useOrganisasi";

export default function StrukturOrganisasi() {
  const [slide, setSlide] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const { dataOrganisasi: data, isLoading } = useOrganisasi();

  const handleNext = () => {
    setSlide("slide-in");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      setSlide("");
    }, 500);
  };

  const handlePrev = () => {
    setSlide("slide-in");
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + data.length) % data.length
      );
      setSlide("");
    }, 500);
  };

  return (
    <>
      <div
        className="bg-white py-8 px-20"
        id="struktur-organisasi"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(./sejarah.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="text-6xl font-extrabold uppercase text-white text-left my-20 font-nunito">
          Struktur Organisasi
        </p>
        {isLoading ? (
          <p className="text-center text-lg text-white font-nunito">
            Loading...
          </p>
        ) : (
          <div className="flex items-center justify-center">
            <button
              onClick={handlePrev}
              className="bg-white border-4 shadow-lg rounded-full w-12 h-12 flex items-center justify-center mr-4"
            >
              <MdNavigateBefore size={32} className="text-zinc-800" />
            </button>
            <div
              className={`flex flex-col items-center justify-center bg-white bg-opacity-25 w-[550px] h-80 rounded-xl border-2 border-neutral-200 shadow-md ${slide} backdrop-filter backdrop-blur-lg`}
            >
              <div className="bg-red-100 rounded-full w-48 h-48">
                {data[currentIndex] && (
                  <img
                    src={data[currentIndex].fotoProfil}
                    alt={data[currentIndex].namaLengkap}
                    className="w-48 h-48 rounded-full object-cover"
                  />
                )}
              </div>
              <h2 className="text-xl font-bold text-white">
                {data[currentIndex] && data[currentIndex].namaLengkap}
              </h2>
              <h3 className="text-xs text-amber-300">
                {data[currentIndex] && data[currentIndex].jabatan}
              </h3>
              <p className="text-center text-xs mx-12 mt-2 text-white">
                {data[currentIndex] && data[currentIndex].deskripsi}
              </p>
            </div>
            <button
              onClick={handleNext}
              className="bg-white border-4 shadow-lg rounded-full w-12 h-12 flex items-center justify-center ml-4"
            >
              <MdNavigateNext size={32} className="text-zinc-800" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
