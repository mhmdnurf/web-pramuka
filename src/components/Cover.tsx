export default function Cover() {
  return (
    <>
      <div
        className="sm:w-full bg-white h-[400px] sm:h-[500px] md:h-[700px] flex flex-col sm:flex-row pl-10 pt-20 pr-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(./cover.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="home"
      >
        <div className="w-full sm:w-2/3 mr-12">
          <h1 className="font-semibold text-2xl sm:text-4xl text-white">
            SMA Negeri 1 Toapaya
          </h1>
          <h3 className="font-nunito font-medium my-6 text-xs sm:text-lg text-white">
            SMA ini didirikan di era reformasi atas tuntutan masyarakat akan
            lembaga pendidikan di daerah ini, serta pertimbangan upaya tetap
            mempertahankan keberadaan institusi pendidikan yang telah ada yaitu
            SMUN 1 Bintan Timur (kelas jauh) terkait dengan dikeluarkannya surat
            dari Dinas Pendidikan Provinsi Riau Melalui Dinas Pendidikan
            Kabupaten Kepulauan Riau untuk membangun Sekolah Baru di Kecamatan
            Gunung Kijang
          </h3>
        </div>
        <div className="w-full sm:w-[400px] h-[200px] sm:h-[400px] rounded-full hidden sm:flex items-center justify-center mt-4 sm:mt-0">
          <img
            src="./logo-sekolah.png"
            className="h-[200px] sm:h-[400px] w-[200px] sm:w-[400px] object-contain"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
