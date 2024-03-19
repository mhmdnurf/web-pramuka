import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function DaftarPrestasi() {
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
      image: "./sejarah.jpg",
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
      image: "./sejarah.jpg",
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
      <div className="bg-neutral-100 border-b-2">
        <p className="text-6xl font-extrabold uppercase text-black text-center pt-12 pb-6">
          Daftar Prestasi
        </p>
        <div className="my-4">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Pagination]}
            scrollbar={{ draggable: true }}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="min-w-80 min-h-72 bg-amber-800 bg-opacity-60 rounded-lg shadow-xl">
                  <img
                    src={item.image}
                    alt="prestasi"
                    className="rounded-t-lg object-cover w-full h-52"
                  />
                  <div className="p-4">
                    <p className="text-xs text-white font-extralight">
                      {item.date}
                    </p>
                    <p className="text-sm font-bold text-white">{item.title}</p>
                    <p className="text-xs text-white font-extralight">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
