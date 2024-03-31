import React from "react";

export default function SandiAmbalan(): React.JSX.Element {
  return (
    <>
      <div className="sm:mx-20 mx-4 sm:mb-20 mb-10" id="sandi-ambalan">
        <p className="font-extrabold sm:text-6xl text-2xl uppercase my-6 sm:my-20 font-nunito text-zinc-800">
          Sandi Ambalan
        </p>
        <div className="flex justify-center shadow">
          <div className="w-full p-8 bg-amber-100">
            <p className="text-justify font-light text-sm my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              iusto, qui, illo hic magnam numquam officiis iure molestiae
              tenetur nam sapiente officia quia saepe est.{" "}
            </p>
            <p className="text-justify font-light text-sm my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              numquam nisi aut impedit laborum excepturi?
            </p>
            <p className="text-justify font-light text-sm my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
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
