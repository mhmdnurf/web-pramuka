import React from "react";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface TabelVideo {
  dataVideo: {
    id: string;
    videoURL: string;
  }[];
  handleShowVideo: (imageUrl: string) => void;
}

export default function TabelVideo({
  dataVideo,
  handleShowVideo,
}: TabelVideo): React.JSX.Element {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const totalPages = Math.ceil(dataVideo.length / itemsPerPage);
  const currentItems = dataVideo.slice(startIndex, endIndex);
  return (
    <>
      <div id="video">
        <div className="bg-white grow px-4 sm:px-20 py-10">
          <h1 className="text-4xl font-semibold text-slate-700 mb-6">Video</h1>
          <div className="divide-y divide-gray-200 border-4 rounded-xl overflow-auto shadow-md">
            <table className="min-w-full table-fixed">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    No.
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Video
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
                        onClick={() => handleShowVideo(item.videoURL)}
                      >
                        Lihat
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="bg-amber-500 rounded text-white px-4 py-2 mr-2 outline-none focus:ring-4 transition-all ring-amber-300">
                        <Link to={`/editVideo/${item.id}`}>
                          <FaPencil />
                        </Link>
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
