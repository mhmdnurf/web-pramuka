import React from "react";
import { Link } from "react-scroll";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa6";

export default function Footer(): React.JSX.Element {
  return (
    <>
      <div className="w-full h-64 bg-sky-950">
        <div className="flex justify-between items-center h-full mx-20">
          <h1 className="text-2xl font-semibold text-white ">
            Pramuka SMA Negeri 1 Toapaya
          </h1>
          <nav className="flex">
            <ul className="flex gap-12">
              <li className="font-light text-white cursor-pointer">
                <Link to="sejarah" smooth duration={500}>
                  Sejarah
                </Link>
              </li>
              <li className="font-light text-white cursor-pointer">
                <Link to="visi-misi" smooth duration={500}>
                  Visi & Misi
                </Link>
              </li>
              <li className="font-light text-white cursor-pointer">
                <Link to="daftar-prestasi" smooth duration={500}>
                  Daftar Prestasi
                </Link>
              </li>
              <li className="font-light text-white cursor-pointer">
                <Link to="struktur-organisasi" smooth duration={500}>
                  Struktur Organisasi
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex gap-4">
            <a href={"https://www.instagram.com/mhmd.zaka"} target="__blank">
              <FaInstagram size={32} color="white" />
            </a>
            <a href="https://www.facebook.com" target="__blank">
              <FaFacebook size={32} color="white" />
            </a>
            <FaWhatsapp size={32} color="white" />
          </div>
        </div>
      </div>
    </>
  );
}
