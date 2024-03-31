import React from "react";

export default function Logo(): React.JSX.Element {
  return (
    <>
      <div className="bg-amber-900 bg-opacity-70" id="logo">
        <p className="text-center text-2xl sm:text-4xl md:text-6xl text-white font-extrabold sm:pt-20 pt-10 font-nunito">
          LOGO
        </p>
        <div className="flex flex-col sm:mt-24 mt-6 mx-4 sm:mx-20 pb-20 sm:flex-row">
          <div className="shadow rounded-3xl border-4 border-white mb-4 sm:mb-0">
            <img
              src="./sejarah.jpg"
              alt=""
              width={800}
              className="w-full sm:w-[800px] rounded-3xl"
            />
          </div>
          <div className="w-full sm:w-1/2 sm:ml-20">
            <p className="text-white font-semibold sm:text-base text-xs text-justify font-nunito">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              blanditiis sapiente libero illo voluptatibus incidunt eveniet
              quaerat rem aperiam dignissimos alias necessitatibus, magnam,
              debitis reprehenderit? Voluptate iure aliquid tenetur nemo
              necessitatibus excepturi veniam pariatur laborum aspernatur
              officia? Non nesciunt nisi culpa voluptatem numquam,
              necessitatibus qui sint aspernatur fugiat delectus ea, vero animi
              quidem adipisci. Accusantium in atque nam odio dignissimos quod
              repellendus eligendi assumenda voluptatum, dolor quidem earum
              doloremque architecto corrupti pariatur et blanditiis placeat,
              sunt quae ea nostrum aperiam tenetur? Optio ad architecto iure
              tempore quis a odit? Molestias, obcaecati voluptas. Totam facilis
              omnis numquam explicabo quasi et provident.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
