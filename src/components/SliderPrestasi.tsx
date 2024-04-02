import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles.css";

// import required modules
import { Autoplay } from "swiper/modules";

interface Data {
  id: string;
  tanggal: string;
  judul: string;
  deskripsi: string;
  imageURL: string;
}

interface SliderPrestasi {
  data: Data[];
}

export default function SliderPrestasi({ data }: SliderPrestasi) {
  return (
    <div className="sm:mx-5 mx-4 sm:mt-8 mt-6 sm:pb-16 pb-8">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          790: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="min-w-80 min-h-52 bg-amber-800 bg-opacity-60 rounded-lg shadow-xl">
              <img
                src={item.imageURL}
                alt="prestasi"
                className="rounded-t-lg object-cover w-full h-52"
              />
              <div className="p-4 h-36">
                <p className="text-xs text-white font-extralight">
                  {new Date(item.tanggal).toLocaleDateString("id-ID", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-sm font-bold text-white">{item.judul}</p>
                <p className="text-xs text-white font-extralight">
                  {item.deskripsi}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
