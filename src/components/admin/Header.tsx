import React from "react";
import { Link } from "react-scroll";
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
            <h1 className="font-medium text-slate-800">Halo, Admin</h1>
            <button
              className="ml-4 font-semibold hover:underline hover:text-red-400"
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
