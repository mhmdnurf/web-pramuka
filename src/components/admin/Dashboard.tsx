import React from "react";
import Header from "./Header";
import { FaTrash, FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";
import usePrestasi from "../../hooks/usePrestasi";
import useOrganisasi from "../../hooks/useOrganisasi";

export default function Dashboard(): React.JSX.Element {
  const { dataPrestasi, isLoading: isLoadingPrestasi } = usePrestasi();
  const { dataOrganisasi, isLoading: isLoadingOrganisasi } = useOrganisasi();

  const handleShowImage = (url: string) => {
    window.open(url, "_blank");
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
          <div id="daftar-prestasi">
            <div className="bg-white grow px-20 py-10">
              <h1 className="text-4xl font-semibold text-slate-700 mb-6">
                Daftar Prestasi
              </h1>
              <div className="flex justify-end mb-4">
                <Link
                  to={"/addPrestasi"}
                  className="bg-slate-600 text-white px-4 py-2 rounded-lg mx-4 outline-none focus:ring-4 transition-all ring-slate-300"
                >
                  Tambah Prestasi
                </Link>
                <input
                  type="search"
                  className="border-2 rounded-md focus:outline-none focus:ring-2 transition-all ring-slate-300 p-2"
                />
              </div>
              <div className="divide-y divide-gray-200 border-4 rounded-xl overflow-hidden shadow-md">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        No.
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Gambar
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tanggal
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Judul
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Deskripsi
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {dataPrestasi.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4">{index + 1}</td>
                        <td className="px-6 py-4">
                          <img
                            src={item.imageURL}
                            alt="gambar"
                            className="w-64 h-40 object-cover rounded-md"
                          />
                        </td>
                        <td className="px-6 py-4">{item.tanggal}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.judul}
                        </td>
                        <td className="px-6 py-4 text-justify">
                          {item.deskripsi}
                        </td>
                        <td className="px-6 py-4">
                          <button className="bg-amber-500 rounded text-white px-4 py-2 mr-2 outline-none focus:ring-4 transition-all ring-amber-300">
                            <FaPencil />
                          </button>
                          <button className="bg-red-500 rounded text-white px-4 py-2 outline-none focus:ring-4 transition-all ring-red-300">
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div id="struktur-organisasi">
            <div className="bg-white grow px-20 py-10">
              <h1 className="text-4xl font-semibold text-slate-700 mb-6">
                Struktur Organisasi
              </h1>
              <div className="flex justify-end mb-4">
                <Link
                  to={"/addStruktur"}
                  className="bg-slate-600 text-white px-4 py-2 rounded-lg mx-4 outline-none focus:ring-4 transition-all ring-slate-300"
                >
                  Tambah Struktur Organisasi
                </Link>
                <input
                  type="search"
                  className="border-2 rounded-md focus:outline-none focus:ring-2 transition-all ring-slate-300 p-2"
                />
              </div>
              <div className="divide-y divide-gray-200 border-4 rounded-xl overflow-x-auto shadow-md mb-20 max-h-[500px]">
                <table className="min-w-full table-fixed">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        No.
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Foto
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nama Lengkap
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Jabatan
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Deskripsi
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {dataOrganisasi.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4">{index + 1}</td>
                        <td className="px-6 py-4">
                          <button
                            className="hover:underline hover:text-blue-600 transition-all  transform hover:scale-125"
                            onClick={handleShowImage.bind(
                              null,
                              item.fotoProfil
                            )}
                          >
                            Lihat
                          </button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.namaLengkap}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.jabatan}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.deskripsi}
                        </td>
                        <td className="px-6 py-4 text-nowrap">
                          <button className="bg-amber-500 rounded text-white px-4 py-2 mr-2 outline-none focus:ring-4 transition-all ring-slate-300">
                            <FaPencil />
                          </button>
                          <button className="bg-red-500 rounded text-white px-4 py-2 outline-none focus:ring-4 transition-all ring-red-300">
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
