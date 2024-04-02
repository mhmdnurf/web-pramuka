import React from "react";
export default function Logo(): React.JSX.Element {
  return (
    <>
      <div className="bg-amber-900 bg-opacity-70" id="logo">
        <p className="text-center text-2xl sm:text-4xl md:text-6xl text-white font-extrabold sm:pt-20 pt-10 font-nunito">
          LOGO
        </p>
        <div className="flex flex-col sm:mt-24 mt-6 mx-4 sm:mx-20 pb-20 sm:flex-row">
          <div className="rounded-3xl mb-4 sm:mb-0 flex justify-center">
            <img
              src="./logo-pramuka.png"
              alt=""
              className="w-52 sm:w-[400px] sm:h-[400px] object-cover sm:object-cover rounded-3xl"
            />
          </div>
          <div className="w-full sm:w-fit sm:ml-20 border-4 border-amber-500 rounded-xl p-4 ">
            <div className="flex flex-row flex-wrap justify-center">
              <div className="mb-2 sm:mr-8">
                <div className="flex flex-col">
                  <h1 className="text-black font-bold sm:text-xl text-xs text-justify font-nunito bg-white p-2 rounded-lg w-60 my-2">
                    Tali Tambang
                  </h1>
                  <p className="text-white sm:text-base p-2 w-60 font-nunito bg-yellow-500 rounded-md">
                    Menandakan tali persaudaraan tidak pernah putus
                  </p>
                </div>
              </div>
              <div className="mb-2">
                <h1 className="text-black font-bold sm:text-xl text-xs text-justify font-nunito bg-white p-2 rounded-lg w-60 my-2">
                  Bintang
                </h1>
                <p className="text-white sm:text-base p-2 w-60 font-nunito bg-yellow-500 rounded-md">
                  Ketuhanan yang Maha Esa
                </p>
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center">
              <div className="mb-2 sm:mr-8">
                <h1 className="text-black font-bold sm:text-xl text-xs text-justify font-nunito bg-white p-2 rounded-lg w-60 my-2">
                  Senjata Ambalan
                </h1>
                <p className="text-white sm:text-base p-2 w-60 font-nunito bg-yellow-500 rounded-md">
                  Bambu Kuning (SMAN 1 Toapaya dikelilingi bambu kuning)
                </p>
              </div>
              <div className="mb-2">
                <h1 className="text-black font-bold sm:text-xl text-xs text-justify font-nunito bg-white p-2 rounded-lg w-60 my-2">
                  Angka Satu
                </h1>
                <p className="text-white sm:text-base p-2 w-60 font-nunito bg-yellow-500 rounded-md">
                  Merupakan Sekolah Menengah Atas yang ada di Toapaya
                </p>
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center">
              <div className="mb-2 sm:mr-8">
                <h1 className="text-black font-bold sm:text-xl text-xs text-justify font-nunito bg-white p-2 rounded-lg w-60 my-2">
                  Nomor Gugus Depan
                </h1>
                <p className="text-white sm:text-base p-2 w-60 font-nunito bg-yellow-500 rounded-md">
                  10.017 - 10.018
                </p>
              </div>
              <div className="mb-2">
                <h1 className="text-black font-bold sm:text-xl text-xs text-justify font-nunito bg-white p-2 rounded-lg w-60 my-2">
                  Toapaya
                </h1>
                <p className="text-white sm:text-base p-2 w-60 font-nunito bg-yellow-500 rounded-md">
                  Salah Satu Kwartir Ranting yang ada di Kabupaten Bintan
                </p>
              </div>
            </div>
            <div className="mb-2">
              <h1 className="text-black font-bold sm:text-xl text-xs font-nunito bg-white p-2 rounded-lg w-full my-2 text-center">
                Persegi Lima
              </h1>
              <p className="text-white sm:text-base p-2 w-full font-nunito bg-yellow-500 rounded-md text-center">
                Menandakan Lima Pancasila dan Shalat Lima Waktu{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
