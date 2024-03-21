import React from "react";
import { Link } from "react-scroll";

export default function Header() {
  const [activeLink, setActiveLink] = React.useState("");
  console.log(activeLink);
  return (
    <>
      <div className="py-8 bg-white bg-opacity-10 backdrop-blur-md drop-shadow-xl sticky top-0">
        <nav className="flex justify-center">
          <ul className="flex gap-12">
            <li className="font-semibold text-slate-800  cursor-pointer">
              <Link
                to="home"
                smooth
                duration={500}
                spy
                onSetActive={() => setActiveLink("home")}
                className={
                  activeLink === "home" ? "border-b-4 border-slate-500" : ""
                }
              >
                Home
              </Link>
            </li>
            <li className="font-semibold text-slate-800 cursor-pointer">
              <Link
                to="sejarah"
                smooth
                duration={500}
                spy
                onSetActive={() => setActiveLink("sejarah")}
                className={
                  activeLink === "sejarah" ? "border-b-4 border-slate-500" : ""
                }
              >
                Sejarah
              </Link>
            </li>
            <li className="font-semibold text-slate-800 cursor-pointer">
              <Link
                to="visi-misi"
                smooth
                duration={500}
                spy
                onSetActive={() => setActiveLink("visi-misi")}
                className={
                  activeLink === "visi-misi"
                    ? "border-b-4 border-slate-500"
                    : ""
                }
              >
                Visi & Misi
              </Link>
            </li>
            <li className="font-semibold text-slate-800 cursor-pointer">
              <Link
                to="daftar-prestasi"
                smooth
                duration={500}
                spy
                onSetActive={() => setActiveLink("dafar-prestasi")}
                className={
                  activeLink === "dafar-prestasi"
                    ? "border-b-4 border-slate-500"
                    : ""
                }
              >
                Daftar Prestasi
              </Link>
            </li>
            <li className="font-semibold text-slate-800 cursor-pointer">
              <Link
                to="struktur-organisasi"
                smooth
                duration={500}
                spy
                onSetActive={() => setActiveLink("struktur-organisasi")}
                className={
                  activeLink === "struktur-organisasi"
                    ? "border-b-4 border-slate-500"
                    : ""
                }
              >
                Struktur Organisasi
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
