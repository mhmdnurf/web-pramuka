export default function Header() {
  return (
    <>
      <div className="py-8 bg-white drop-shadow">
        <nav className="flex justify-center">
          <ul className="flex gap-12">
            <li className="font-semibold text-slate-800">Home</li>
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
