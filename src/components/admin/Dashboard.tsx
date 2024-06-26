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
import TabelGallery from "./TabelGallery";
import useGallery from "../../hooks/useGallery";
import useVideo from "../../hooks/useVideo";
import TabelVideo from "./TabelVideo";

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

  const {
    dataGallery,
    updateGallery,
    isLoading: isLoadingGallery,
  } = useGallery();

  const { dataVideo, isLoading: isLoadingVideo } = useVideo();

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

  const handleDeleteGallery = async (id: string) => {
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
      await deleteDoc(doc(db, "gallery", id));
      updateGallery(id);
    }
  };

  return (
    <>
      {isLoadingPrestasi ||
      isLoadingOrganisasi ||
      isLoadingGallery ||
      isLoadingVideo ? (
        <div className="fixed inset-0 bg-black/25 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            <p className="text-lg font-semibold text-slate-800">Loading...</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col max-h-screen max-w-screen">
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
          <TabelGallery
            dataGallery={dataGallery}
            handleDeleteGallery={handleDeleteGallery}
            handleShowImage={handleShowImage}
          />
          <TabelVideo dataVideo={dataVideo} handleShowVideo={handleShowImage} />
        </div>
      )}
    </>
  );
}
