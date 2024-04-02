import React from "react";

export default function SandiAmbalan(): React.JSX.Element {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(./cover-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="sm:p-20 p-6"
      >
        <div className="sm:mx-20 sm:mb-20 mb-10" id="sandi-ambalan">
          <p className="font-extrabold sm:text-6xl text-2xl uppercase my-6 sm:mt-20 sm:mb-15 font-nunito text-white sm:pt-20">
            Sandi Ambalan
          </p>
          <div className="flex justify-center shadow">
            <div className="w-full p-8 sm:bg-amber-100 bg-white rounded-xl sm:backdrop-blur-sm backdrop-filter sm:bg-opacity-25 bg-opacity-25 border border-slate-200">
              <p className="text-justify font-medium text-xs sm:text-sm my-4 text-white">
                Panas terik sang mentari
              </p>
              <p className="text-justify font-medium text-xs sm:text-sm my-4 text-white">
                Membakar semangat di dalam hati
              </p>
              <p className="text-justify font-medium text-xs sm:text-sm my-4 text-white">
                Hari demi hari Ku lalui Hingga ku jejakkan kaki di ambalan ini
              </p>
              <p className="text-justify font-medium text-xs sm:text-sm my-4 text-white">
                Berharap ilmu yang berguna untuk negeri
              </p>
              <p className="text-justify font-medium  text-xs sm:text-sm my-4 text-white">
                Tempat seorang Kesatria yang berpegang teguh Pada Tri Satya dan
                dasa dharma
              </p>
              <p className="text-justify font-medium text-xs sm:text-sm my-4 text-white">
                Cikal bakal bunas bangsa, Kini di hadapan Sang illahi ku
                Ikrarkan janji di dalam hati tuk menjadi seorang Pramuka Sejati
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
