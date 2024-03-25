import React from "react";
import Header from "./Header";
import usePrestasi from "../../hooks/usePrestasi";
import useOrganisasi from "../../hooks/useOrganisasi";
import { app } from "../../utils/firebase";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import TabelPrestasi from "./TabelPrestasi";
import TabelOrganisasi from "./TabelOrganisasi";
import DaftarAnggota from "./DaftarAnggota";

export default function Dashboard(): React.JSX.Element {
  const {
    dataPrestasi,
    isLoading: isLoadingPrestasi,
    updatePrestasi,
  } = usePrestasi();
  const {
    dataOrganisasi,
    isLoading: isLoadingOrganisasi,
    updateOrganisasi,
  } = useOrganisasi();

  const handleShowImage = (url: string) => {
    window.open(url, "_blank");
  };

  const handleDeletePrestasi = async (id: string) => {
    const result = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Data yang dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#334155",
      cancelButtonColor: "#94a3b8",
      confirmButtonText: "Confirm",
      cancelButtonText: "Batal",
    });
    if (result.isConfirmed) {
      const db = getFirestore(app);
      await deleteDoc(doc(db, "prestasi", id));
      updatePrestasi(id);
    }
  };

  const handleDeleteOrganisasi = async (id: string) => {
    const result = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Data yang dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#334155",
      cancelButtonColor: "#94a3b8",
      confirmButtonText: "Confirm",
      cancelButtonText: "Batal",
    });
    if (result.isConfirmed) {
      const db = getFirestore(app);
      await deleteDoc(doc(db, "struktur-organisasi", id));
      updateOrganisasi(id);
    }
  };

  return (
    <>
      {isLoadingPrestasi || isLoadingOrganisasi ? (
        <div className="fixed inset-0 bg-black/25 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            <p className="text-lg font-semibold text-slate-800">Loading...</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-screen">
          <Header />
          <DaftarAnggota />
          <TabelPrestasi
            dataPrestasi={dataPrestasi}
            handleDeletePrestasi={handleDeletePrestasi}
            handleShowImage={handleShowImage}
          />
          <TabelOrganisasi
            dataOrganisasi={dataOrganisasi}
            handleDeleteOrganisasi={handleDeleteOrganisasi}
            handleShowImage={handleShowImage}
          />
        </div>
      )}
    </>
  );
}
