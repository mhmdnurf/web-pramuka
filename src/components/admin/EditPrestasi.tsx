import React from "react";
import { Link } from "react-router-dom";

export default function EditPrestasi(): React.JSX.Element {
  const [imageURL, setImageURL] = React.useState<string | null>(null);
  const [tanggal, setTanggal] = React.useState<string>("");
  const [judul, setJudul] = React.useState<string>("");
  const [deskripsi, setDeskripsi] = React.useState<string>("");
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle the file upload here
      setImageURL(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      tanggal,
      judul,
      deskripsi,
      imageURL,
    });
  };
  return (
    <>
      <div className="py-8 bg-slate-700 sticky top-0">
        <h1 className="mx-20 text-2xl text-white font-semibold">
          Tambah Prestasi
        </h1>
      </div>
      <div className="mt-10 mx-20">
        <Link to={"/dashboard"}>
          <button className="bg-slate-600 text-white px-4 py-2 rounded-lg outline-none focus:ring-4 transition-all ring-slate-300">
            Kembali
          </button>
        </Link>
        <form
          className="flex flex-col mt-4 mb-10 border-4 rounded-xl p-4"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="file-upload"
            className="bg-slate-600 px-4 py-4 w-64 text-center rounded-xl font-semibold text-white cursor-pointer mb-4"
          >
            Upload Image
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          {imageURL && (
            <div className="flex justify-center items-center">
              <img
                src={imageURL}
                alt="Uploaded"
                className="mt-4 max-w-[600px] max-h-[400px] object-cover border-8 border-zinc-700  rounded-md"
              />
            </div>
          )}
          <label
            htmlFor="tanggal"
            className="text-lg font-semibold text-slate-700"
          >
            Tanggal Penghargaan
          </label>
          <input
            type="date"
            className="border p-2 my-2 rounded-md outline-none focus:ring-2 ring-slate-300 transition-all"
            placeholder="Tanggal Penghargaan"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
          />
          <label
            htmlFor="tanggal"
            className="text-lg font-semibold text-slate-700"
          >
            Judul Prestasti
          </label>
          <input
            type="text"
            className="border p-2 my-2 rounded-md outline-none focus:ring-2 ring-slate-300 transition-all"
            placeholder="Masukkan Judul Prestasi"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
          />
          <label
            htmlFor="tanggal"
            className="text-lg font-semibold text-slate-700"
          >
            Deskripsi Prestasi
          </label>
          <input
            type="text"
            className="border p-2 my-2 rounded-md outline-none focus:ring-2 ring-slate-300 transition-all"
            placeholder="Masukkan Deskripsi Prestasi"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
          />
          <button
            className="bg-slate-600 text-white px-4 py-2 rounded-lg outline-none focus:ring-4 transition-all ring-slate-300 mt-4 font-semibold"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
