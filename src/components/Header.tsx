export default function Header() {
  return (
    <>
      <div className="py-8 bg-slate-50 bg-opacity-10 backdrop-blur-md drop-shadow-xl sticky top-0">
        <nav className="flex justify-center">
          <ul className="flex gap-12">
            <li className="font-semibold text-slate-800 border-b-4 border-slate-500">
              Home
            </li>
            <li className="font-semibold text-slate-800">Sejarah</li>
            <li className="font-semibold text-slate-800">Visi & Misi</li>
            <li className="font-semibold text-slate-800">Daftar Prestasi</li>
            <li className="font-semibold text-slate-800">
              Struktur Organisasi
            </li>
            <li className="font-semibold text-slate-800">Galeri</li>
          </ul>
        </nav>
      </div>
    </>
  );
}
