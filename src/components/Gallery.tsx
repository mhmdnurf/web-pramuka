import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles.css";

// import required modules
import { Autoplay } from "swiper/modules";
import usePrestasi from "../hooks/usePrestasi";

export default function Gallery() {
  const { dataPrestasi } = usePrestasi();

  return (
    <>
      <div
        className="w-full"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(./dokumentasi.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="galeri"
      >
        <div className="backdrop-filter bg-opacity-25 backdrop-blur-lg">
          <h1 className="sm:text-6xl text-4xl text-center font-bold pt-16 sm:pb-8 pb-6 text-white">
            Gallery
          </h1>
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
              {dataPrestasi.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="bg-amber-800 bg-opacity-60 rounded-lg ">
                    <img
                      src={item.imageURL}
                      alt="prestasi"
                      className="rounded-lg object-cover w-full h-80 sm:h-96"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
