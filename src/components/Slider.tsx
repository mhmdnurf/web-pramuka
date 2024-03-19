import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles.css";

// import required modules
import { Autoplay } from "swiper/modules";

interface Data {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
}

interface Slider {
  data: Data[];
}

export default function Slider({ data }: Slider) {
  return (
    <div className="mx-20 my-8">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
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
  );
}
