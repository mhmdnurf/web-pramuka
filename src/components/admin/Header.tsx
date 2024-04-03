import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { app } from "../../utils/firebase";
import { getAuth, signOut } from "firebase/auth";
import Swal from "sweetalert2";

export default function Header(): React.JSX.Element {
  const handleLogout = async () => {
    try {
      const result = await Swal.fire({
        title: "Apakah Anda Yakin?",
        text: "Anda akan segera logout dari web",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#334155",
        cancelButtonColor: "#94a3b8",
        cancelButtonText: "Batal",
        confirmButtonText: "Confirm",
      });

      if (result.isConfirmed) {
        const auth = getAuth(app);
        await signOut(auth);
        Swal.fire("Berhasil", "Anda berhasil logout", "success");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="sm:py-8 py-4 bg-gradient-to-r bg-slate-300 sticky top-0 border-b-2 backdrop-blur-lg bg-opacity-50 w-full">
        <nav className="flex justify-between md:mx-20 mx-4">
          <ul className="flex space-x-4">
            <li className="font-semibold text-slate-800 sm:text-base text-xs cursor-pointer hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="font-semibold text-slate-800 sm:text-base text-xs cursor-pointer hover:underline">
              <ScrollLink to="daftar-prestasi" smooth duration={500}>
                Prestasi
              </ScrollLink>
            </li>
            <li className="font-semibold text-slate-800 sm:text-base text-xs cursor-pointer hover:underline">
              <ScrollLink to="struktur-organisasi" smooth duration={500}>
                Struktur
              </ScrollLink>
            </li>
            <li className="font-semibold text-slate-800 sm:text-base text-xs cursor-pointer hover:underline">
              <ScrollLink to="struktur-organisasi" smooth duration={500}>
                Video
              </ScrollLink>
            </li>
            <li className="font-semibold text-slate-800 sm:text-base text-xs cursor-pointer hover:underline">
              <ScrollLink to="struktur-organisasi" smooth duration={500}>
                Galeri
              </ScrollLink>
            </li>
          </ul>
          <div className="flex justify-end items-end">
            <button
              className="ml-4 font-semibold hover:underline sm:text-base text-xs hover:text-red-400"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
