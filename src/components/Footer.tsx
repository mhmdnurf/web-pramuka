import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa6";

export default function Footer(): React.JSX.Element {
  return (
    <>
      <div className="w-full h-48 bg-sky-950">
        <div className="flex justify-between items-center h-full mx-20">
          <h1 className="text-2xl font-semibold text-white ">
            Pramuka SMA Negeri 1 Toapaya
          </h1>
          <nav className="flex">
            <ul className="flex gap-12">
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
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <a href={"https://www.instagram.com/mhmd.zaka"} target="__blank">
                <FaInstagram size={32} color="white" />
              </a>
              <a href="https://www.facebook.com" target="__blank">
                <FaFacebook size={32} color="white" />
              </a>
              <FaWhatsapp size={32} color="white" />
            </div>
            <Link to="/dashboard" className="text-white hover:underline">
              Admin
            </Link>
          </div>
        </div>
        <div className="bg-sky-950 pb-4">
          <h1 className="text-white text-center font-semibold">
            Copyright {new Date().getFullYear()} - Pramuka SMA Negeri 1 Toapaya
          </h1>
        </div>
      </div>
    </>
  );
}
