import React from "react";
import { Link } from "react-scroll";

export default function Header(): React.JSX.Element {
  return (
    <>
      <div className="py-8 bg-slate-200 sticky top-0 border-b-2">
        <nav className="flex justify-between mx-20">
          <ul className="flex gap-12">
            <li className="font-semibold text-slate-800  cursor-pointer hover:underline">
              <Link to="daftar-prestasi" smooth duration={500}>
                Daftar Prestasi
              </Link>
            </li>
            <li className="font-semibold text-slate-800  cursor-pointer hover:underline">
              <Link to="struktur-organisasi" smooth duration={500}>
                Struktur Organisasi
              </Link>
            </li>
          </ul>
          <div className="flex justify-end items-end">
            <h1 className="font-semibold text-slate-800">Halo, Admin</h1>
          </div>
        </nav>
      </div>
    </>
  );
}
