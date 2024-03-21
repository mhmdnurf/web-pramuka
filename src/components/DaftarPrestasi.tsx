import React from "react";
import SliderPrestasi from "./SliderPrestasi";

export default function DaftarPrestasi(): React.JSX.Element {
  const data = [
    {
      id: 1,
      date: "19 November 2022",
      title: "Lomba Kemah Wawasan Kebangsaan 2024 Tingkat Provinsi",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora reprehenderit hic ipsum facilis minima sit?",
      image: "./sejarah.jpg",
    },
    {
      id: 2,
      date: "19 November 2022",
      title: "Lomba Kemah Wawasan Kebangsaan 2024 Tingkat Provinsi",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora reprehenderit hic ipsum facilis minima sit?",
      image: "./cover.jpg",
    },
    {
      id: 3,
      date: "19 November 2022",
      title: "Lomba Kemah Wawasan Kebangsaan 2024 Tingkat Provinsi",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora reprehenderit hic ipsum facilis minima sit?",
      image: "./sejarah.jpg",
    },
    {
      id: 4,
      date: "19 November 2022",
      title: "Lomba Kemah Wawasan Kebangsaan 2024 Tingkat Provinsi",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora reprehenderit hic ipsum facilis minima sit?",
      image: "./cover.jpg",
    },
    {
      id: 5,
      date: "19 November 2022",
      title: "Lomba Kemah Wawasan Kebangsaan 2024 Tingkat Provinsi",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora reprehenderit hic ipsum facilis minima sit?",
      image: "./sejarah.jpg",
    },
  ];
  return (
    <>
      <div className="bg-amber-300 bg-opacity-30 pt-10" id="daftar-prestasi">
        <p className="text-6xl font-extrabold uppercase text-zinc-800 font-nunito text-center pt-12 pb-6">
          Daftar Prestasi
        </p>
        <SliderPrestasi data={data} />
      </div>
    </>
  );
}
