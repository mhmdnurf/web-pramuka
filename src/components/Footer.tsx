import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa6";

export default function Footer(): React.JSX.Element {
  return (
    <>
      <div className="w-full h-auto md:h-48 bg-sky-950">
        <div className="flex flex-col md:flex-row justify-between items-center h-full mx-4 md:mx-20 py-4 md:py-0">
          <h1 className="sm:text-2xl font-semibold text-white text-center md:text-left mb-4 md:mb-0">
            Pramuka SMA Negeri 1 Toapaya
          </h1>
          <nav className="flex justify-center md:justify-start">
            <ul className="flex flex-col md:flex-row gap-4 md:gap-12">
              <li className="font-light text-white cursor-pointer hover:underline">
                <ScrollLink to="sejarah" smooth duration={500}>
                  Sejarah
                </ScrollLink>
              </li>
              <li className="font-light text-white cursor-pointer hover:underline">
                <ScrollLink to="visi-misi" smooth duration={500}>
                  Visi & Misi
                </ScrollLink>
              </li>
              <li className="font-light text-white cursor-pointer hover:underline">
                <ScrollLink to="daftar-prestasi" smooth duration={500}>
                  Daftar Prestasi
                </ScrollLink>
              </li>
              <li className="font-light text-white cursor-pointer hover:underline">
                <ScrollLink to="struktur-organisasi" smooth duration={500}>
                  Struktur Organisasi
                </ScrollLink>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col items-center gap-4 mt-4 md:mt-0">
            <div className="flex gap-4">
              <a href={"https://www.instagram.com/mhmd.zaka"} target="__blank">
                <FaInstagram size={32} color="white" />
              </a>
              <a href="https://www.facebook.com" target="__blank">
                <FaFacebook size={32} color="white" />
              </a>
              <FaWhatsapp size={32} color="white" />
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
