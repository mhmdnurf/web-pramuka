import React from "react";
import { Link } from "react-scroll";

export default function Header() {
  const [activeLink, setActiveLink] = React.useState("");
  return (
    <>
      <div className="sm:py-8 py-6 bg-white bg-opacity-10 backdrop-blur-md drop-shadow-xl sticky top-0">
        <nav className="flex justify-center">
          <ul className="flex sm:gap-12 gap-4">
            <li className="font-semibold text-[6pt] sm:text-base text-slate-800  cursor-pointer">
              <Link
                to="home"
                smooth
                duration={500}
                spy
                onSetActive={() => setActiveLink("home")}
                className={
                  activeLink === "home"
                    ? "sm:border-b-4 border-b-2 border-slate-500"
                    : ""
                }
              >
                Home
              </Link>
            </li>
            <li className="font-semibold text-[6pt] sm:text-base text-slate-800 cursor-pointer">
              <Link
                to="logo"
                smooth
                duration={500}
                spy
                onSetActive={() => setActiveLink("logo")}
                className={
                  activeLink === "logo"
                    ? "sm:border-b-4 border-b-2 border-slate-500"
                    : ""
                }
              >
                Logo
              </Link>
            </li>
            <li className="font-semibold text-[6pt] sm:text-base text-slate-800 cursor-pointer">
              <Link
                to="sandi-ambalan"
                smooth
                duration={500}
                spy
                onSetActive={() => setActiveLink("sandi-ambalan")}
                className={
                  activeLink === "sandi-ambalan"
                    ? "sm:border-b-4 border-b-2 border-slate-500"
                    : ""
                }
              >
                Sandi Ambalan
              </Link>
            </li>
            <li className="font-semibold text-[6pt] sm:text-base text-slate-800 cursor-pointer">
              <Link
                to="daftar-prestasi"
                smooth
                duration={500}
                spy
                onSetActive={() => setActiveLink("dafar-prestasi")}
                className={
                  activeLink === "dafar-prestasi"
                    ? "sm:border-b-4 border-b-2 border-slate-500"
                    : ""
                }
              >
                Daftar Prestasi
              </Link>
            </li>
            <li className="font-semibold text-[6pt] sm:text-base text-slate-800 cursor-pointer">
              <Link
                to="struktur-organisasi"
                smooth
                duration={500}
                spy
                onSetActive={() => setActiveLink("struktur-organisasi")}
                className={
                  activeLink === "struktur-organisasi"
                    ? "sm:border-b-4 border-b-2 border-slate-500"
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
