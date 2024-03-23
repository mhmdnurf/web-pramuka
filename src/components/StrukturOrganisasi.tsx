import React from "react";
import "../organisasi.css";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

export default function StrukturOrganisasi() {
  const [slide, setSlide] = React.useState("");
  const data = [
    {
      image: "./person.png",
      name: "John Doe",
      position: "Ketua Umum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iusto, qui, illo hic magnam numquam officiis iure molestiae tenetur nam sapiente officia quia saepe est.",
    },
    {
      image: "./sejarah.jpg",
      name: "Jane Doe",
      position: "Ketua Umum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iusto, qui, illo hic magnam numquam officiis iure molestiae tenetur nam sapiente officia quia saepe est.",
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

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
              <img
                src={data[currentIndex].image}
                alt={data[currentIndex].name}
                className="w-48 h-48 rounded-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-white">
              {data[currentIndex].name}
            </h2>
            <h3 className="text-xs text-amber-300">
              {data[currentIndex].position}
            </h3>
            <p className="text-center text-xs mx-12 mt-2 text-white">
              {data[currentIndex].description}
            </p>
          </div>
          <button
            onClick={handleNext}
            className="bg-white border-4 shadow-lg rounded-full w-12 h-12 flex items-center justify-center ml-4"
          >
            <MdNavigateNext size={32} className="text-zinc-800" />
          </button>
        </div>
      </div>
    </>
  );
}
