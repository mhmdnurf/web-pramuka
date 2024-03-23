import React from "react";
import Header from "./Header";

// Define your dummy data
const data = [
  { date: "2022-01-01", title: "Prestasi 1", desc: "Description 1" },
  { date: "2022-02-01", title: "Prestasi 2", desc: "Description 2" },
  { date: "2022-03-01", title: "Prestasi 3", desc: "Description 3" },
  // Add more items as needed
];

const dataOrganisasi = [
  {
    namaLengkap: "Muhammad Nurfatkhur Rahman",
    jabatan: "Ketua Umum",
    desc: "Description 1",
  },
  {
    namaLengkap: "Muhammad Zakaria",
    jabatan: "Wakil Ketua Umum",
    desc: "Description 2",
  },
  {
    namaLengkap: "Tarisya",
    jabatan: "Bendahara",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iusto, qui, illo hic magnam numquam officiis iure molestiae tenetur nam sapiente officia voluptates, quidem voluptatem.",
  },
];

interface Dashboard {
  isLoading?: boolean;
}

export default function Dashboard({ isLoading }: Dashboard): React.JSX.Element {
  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 bg-black/25 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            <p className="text-lg font-semibold text-slate-800">Loading...</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-screen">
          <Header />
          <div className="bg-white grow px-20 py-10">
            <h1 className="text-4xl font-semibold text-slate-700 mb-6">
              Daftar Prestasi
            </h1>
            <div className="flex justify-end mb-4">
              <button className="bg-slate-600 text-white px-4 py-2 rounded-lg mx-4 outline-none focus:ring-4 transition-all ring-slate-300">
                Tambah Prestasi
              </button>
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
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">Image</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white grow px-20 py-10">
            <h1 className="text-4xl font-semibold text-slate-700 mb-6">
              Struktur Organisasi
            </h1>
            <div className="flex justify-end mb-4">
              <button className="bg-slate-600 text-white px-4 py-2 rounded-lg mx-4 outline-none focus:ring-4 transition-all ring-slate-300">
                Tambah Struktur Organisasi
              </button>
              <input
                type="search"
                className="border-2 rounded-md focus:outline-none focus:ring-2 transition-all ring-slate-300 p-2"
              />
            </div>
            <div className="divide-y divide-gray-200 border-4 rounded-xl overflow-hidden shadow-md mb-20">
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
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {dataOrganisasi.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">Image</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.namaLengkap}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.jabatan}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
