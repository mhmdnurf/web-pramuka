import React from "react";

export default function Login(): React.JSX.Element {
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-tl from-slate-700  flex flex-col justify-center">
        <div className="flex justify-center items-center bg-white mx-24 rounded-3xl shadow-xl drop-shadow-sm">
          <div
            className="flex w-full justify-center items-center h-full rounded-l-3xl bg-gradient-to-r from-slate-300 to-slate-500
           pt-10"
          >
            <div className="w-[350px]">
              <img src="./login.svg" alt="login" />
              <h1 className="text-center mt-10 text-2xl font-semibold text-slate-700">
                Login Admin - Pramuka SMA Negeri 1 Toapaya
              </h1>
              <h3 className="text-center font-light text-zinc-700 mt-4 mb-8">
                Silahkan login terlebih dahulu sebelum mengakses data admin
              </h3>
            </div>
          </div>
          <div className="bg-white w-full h-full flex justify-center flex-col mx-32">
            <h1 className="text-center mb-6 text-2xl font-semibold text-slate-600">
              Login Admin
            </h1>
            <p className="font-semibold text-slate-700">Email</p>
            <input
              type="text"
              className="border p-2 rounded-md mb-4 outline-2 focus:outline outline-slate-300 transition-all"
            />
            <p className="font-semibold text-slate-700">Password</p>
            <input
              type="password"
              className="border p-2 rounded-md outline-2 focus:outline outline-slate-300 transition-all"
            />
            <p className="text-right mb-4 underline text-xs text-teal-800 cursor-pointer">
              Forgot password?
            </p>
            <button className="bg-slate-800 text-white p-2 rounded-md w-full focus:ring-4 ring-slate-300">
              <p className="font-semibold">Login</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
