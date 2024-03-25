import React from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface Data {
  id: string;
  fotoProfil: string;
  namaLengkap: string;
  jabatan: string;
  deskripsi: string;
}

interface TabelOrganisasi {
  dataOrganisasi: Data[];
  handleDeleteOrganisasi: (id: string) => void;
  handleShowImage: (imageUrl: string) => void;
}

export default function TabelOrganisasi({
  dataOrganisasi,
  handleDeleteOrganisasi,
  handleShowImage,
}: TabelOrganisasi): React.JSX.Element {
  return (
    <>
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
              className="border-2 rounded-md focus:outline-none focus:ring-2 transition-all ring-slate-300 p-2 w-[450px]"
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
                        onClick={() => handleShowImage(item.fotoProfil)}
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
                    <td className="px-6 py-4 text-nowrap flex">
                      <button className="bg-amber-500 rounded text-white px-4 py-2 mr-2 outline-none focus:ring-4 transition-all ring-slate-300">
                        <Link to={`/editStruktur/${item.id}`}>
                          <FaPencil />
                        </Link>
                      </button>
                      <button
                        className="bg-red-500 rounded text-white px-4 py-2 outline-none focus:ring-4 transition-all ring-red-300"
                        onClick={() => handleDeleteOrganisasi(item.id)}
                      >
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
    </>
  );
}
