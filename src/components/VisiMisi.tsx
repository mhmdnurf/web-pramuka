import React from "react";

export default function VisiMisi(): React.JSX.Element {
  return (
    <>
      <div className="mx-20 mb-20" id="visi-misi">
        <p className="font-extrabold text-6xl uppercase my-20 font-nunito text-zinc-800">
          Visi & Misi
        </p>
        <div className="flex justify-center shadow">
          <div className="w-1/2 bg-fuchsia-100 p-8">
            <p className="text-2xl font-bold mb-4">Visi</p>
            <p className="text-justify font-light text-sm">
              Menjadi lembaga pendidikan yang unggul dan berwawasan lingkungan
              yang mampu menghasilkan lulusan yang berkualitas, berdaya saing
              tinggi, dan berjiwa kepemimpinan yang berlandaskan nilai-nilai
              keislaman.
            </p>
          </div>
          <div className="w-1/2 p-8 bg-amber-100">
            <p className="text-2xl font-bold">Misi</p>
            <p className="text-justify font-light text-sm my-4">
              1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              iusto, qui, illo hic magnam numquam officiis iure molestiae
              tenetur nam sapiente officia quia saepe est.{" "}
            </p>
            <p className="text-justify font-light text-sm my-4">
              2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              numquam nisi aut impedit laborum excepturi?
            </p>
            <p className="text-justify font-light text-sm my-4">
              3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              aliquid voluptatem, atque quae facere excepturi. Possimus, et
              accusantium nulla provident nesciunt omnis aliquam placeat
              laboriosam incidunt perferendis illo eveniet dolor?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
