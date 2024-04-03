import React from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface TabelPrestasi {
  dataPrestasi: {
    id: string;
    judul: string;
    deskripsi: string;
    tanggal: string;
    imageURL: string;
  }[];
  handleDeletePrestasi: (id: string) => void;
  handleShowImage: (imageUrl: string) => void;
}

export default function TabelPrestasi({
  dataPrestasi,
  handleDeletePrestasi,
  handleShowImage,
}: TabelPrestasi): React.JSX.Element {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [search, setSearch] = React.useState("");
  const itemsPerPage = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const filteredData = dataPrestasi.filter((item) =>
    item.judul.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice(startIndex, endIndex);
  return (
    <>
      <div id="daftar-prestasi">
        <div className="bg-white grow px-4 sm:px-20 py-10">
          <h1 className="text-4xl font-semibold text-slate-700 mb-6">
            Daftar Prestasi
          </h1>
          <div className="flex flex-col sm:flex-row justify-end mb-4">
            <Link
              to={"/addPrestasi"}
              className="bg-slate-600 text-white sm:text-center px-4 py-2 rounded-lg sm:mr-2 md:mx-4 outline-none focus:ring-4 transition-all ring-slate-300 mb-2 sm:mb-0 font-semibold"
            >
              Tambah Prestasi
            </Link>
            <input
              type="search"
              className="border-2 rounded-md focus:outline-none focus:ring-2 transition-all ring-slate-300 p-2 w-full md:w-[450px]"
              placeholder="Cari Judul Prestasi..."
              onChange={handleSearchChange}
            />
          </div>
          <div className="divide-y divide-gray-200 border-4 rounded-xl overflow-auto shadow-md">
            <table className="min-w-full table-fixed">
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
                {currentItems.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4">{startIndex + index + 1}</td>
                    <td className="px-6 py-4">
                      <button
                        className="hover:underline hover:text-blue-600 transition-all  transform hover:scale-125"
                        onClick={() => handleShowImage(item.imageURL)}
                      >
                        Lihat
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.tanggal}
                    </td>
                    <td className="px-6 py-4 whitespace-wrap">{item.judul}</td>
                    <td className="px-6 py-4 whitespace-wrap">
                      {item.deskripsi}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="bg-amber-500 rounded text-white px-4 py-2 mr-2 outline-none focus:ring-4 transition-all ring-amber-300">
                        <Link to={`/editPrestasi/${item.id}`}>
                          <FaPencil />
                        </Link>
                      </button>
                      <button
                        className="bg-red-500 rounded text-white px-4 py-2 outline-none focus:ring-4 transition-all ring-red-300"
                        onClick={() => handleDeletePrestasi(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="w-full flex p-4 justify-end">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`mx-1 px-4 py-2 border rounded-full ${
                      currentPage === pageNumber
                        ? "bg-slate-600 text-white font-semibold"
                        : ""
                    }`}
                  >
                    {pageNumber}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
