import React from "react";

export default function Sejarah() {
  return (
    <>
      <div className="bg-amber-900 bg-opacity-70">
        <p className="text-center text-6xl text-white font-extrabold pt-20 font-nunito">
          SEJARAH
        </p>
        <div className="flex mt-24 mx-20 pb-20">
          <div className="shadow rounded-3xl border-4 border-white">
            <img
              src="./sejarah.jpg"
              alt=""
              width={800}
              className="w-[800px] rounded-3xl"
            />
          </div>
          <div className="w-1/2 ml-20">
            <p className="text-white font-semibold text-justify font-nunito">
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
