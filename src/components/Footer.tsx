import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaLocationArrow } from "react-icons/fa6";

export default function Footer(): React.JSX.Element {
  return (
    <>
      <div className="w-full h-auto md:h-48 bg-sky-950">
        <div className="flex flex-col md:flex-row justify-between items-center h-full mx-4 md:mx-20 py-4 md:py-0">
          <h1 className="sm:text-2xl font-semibold text-white text-center md:text-left mb-4 md:mb-0 mt-4">
            Pramuka SMA Negeri 1 Toapaya
          </h1>
          <div className="flex flex-col items-center sm:gap-4 mt-4 md:mt-0 text-white sm:text-base text-xs justify-center">
            <div className="flex items-center justify-center">
              <FaLocationArrow
                size={32}
                color="white"
                className="sm:mr-2 hidden sm:flex"
              />
              <span className="text-center sm:text-xs sm:mr-2">
                (21) Kepulauan Riau, (21.01) Kab. Bintan, (21.01.12) Toapaya,
                JL. GESEK KM 25 KAWAL
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 mt-4 md:mt-0">
            <div className="flex gap-4">
              <a
                href={"https://www.instagram.com/ambalansmansatop_"}
                target="__blank"
              >
                <FaInstagram size={32} color="white" />
              </a>
              <a href={"https://wa.me/628126193370"} target="__blank">
                <FaWhatsapp size={32} color="white" />
              </a>
            </div>
            <Link
              to="/dashboard"
              className="text-white hover:underline sm:text-base text-xs"
            >
              Admin
            </Link>
          </div>
        </div>
        <div className="bg-sky-950 pb-4">
          <h1 className="text-white text-center font-semibold sm:text-base text-xs">
            Copyright {new Date().getFullYear()} - Pramuka SMA Negeri 1 Toapaya
          </h1>
        </div>
      </div>
    </>
  );
}
