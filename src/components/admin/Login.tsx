import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../../utils/firebase";

export default function Login(): React.JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [forgotEmail, setForgotEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const navigate = useNavigate();

  const checkLogin = React.useCallback(() => {
    const auth = getAuth(app);
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/dashboard");
      } else {
        setIsLoading(false);
      }
    });
  }, [navigate]);

  React.useEffect(() => {
    checkLogin();
  }, [checkLogin]);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleForgotPassword = () => {
    const auth = getAuth(app);
    sendPasswordResetEmail(auth, forgotEmail)
      .then(() => {
        alert("Email reset password telah dikirim");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error: ${errorCode} - ${errorMessage}`);
      });
    closeModal();
  };

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    const auth = getAuth(app);
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        navigate("/dashboard", { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error: ${errorCode} - ${errorMessage}`);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 bg-black/25 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            <p className="text-lg font-semibold text-slate-800">Loading...</p>
          </div>
        </div>
      ) : (
        <>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Masukkan Email Anda
                      </Dialog.Title>
                      <div className="mt-2">
                        <input
                          type="text"
                          className="border-2 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all font-medium text-slate-800"
                          value={forgotEmail}
                          onChange={(e) => setForgotEmail(e.target.value)}
                        />
                      </div>

                      <div className="mt-4 flex-col flex gap-2">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
                          onClick={handleForgotPassword}
                        >
                          Request New Password
                        </button>
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Close
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          <div
            className="w-screen h-screen flex flex-wrap sm:flex-nowrap justify-center items-center bg-white"
            style={
              windowWidth < 640
                ? {
                    backgroundImage:
                      "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(./login.jpeg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : {}
            }
          >
            <div
              className="sm:flex w-full justify-center items-center sm:h-full pt-10 hidden"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(./login.jpeg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full">
                <h1 className="text-center mt-10 text-2xl font-semibold text-white">
                  Login Admin - Pramuka SMA Negeri 1 Toapaya
                </h1>
                <h3 className="text-center font-light text-white mt-4 mb-8">
                  Silahkan login terlebih dahulu sebelum mengakses data admin
                </h3>
              </div>
            </div>

            <form
              className="bg-white w-full sm:h-full flex justify-center flex-col mx-4 sm:mx-8 md:mx-16 lg:mx-32 p-8 rounded-3xl"
              onSubmit={handleLogin}
            >
              <h1 className="text-center text-lg sm:hidden font-medium text-slate-600 mb-6">
                Pramuka SMA Negeri 1 Toapaya
              </h1>
              <h1 className="text-center mb-6 text-2xl font-semibold text-slate-600">
                Login Admin
              </h1>
              <p className="font-semibold text-slate-700">Email</p>
              <input
                type="text"
                className="border p-2 rounded-md mb-4 outline-2 focus:outline outline-slate-300 transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="font-semibold text-slate-700">Password</p>
              <input
                type={showPassword ? "text" : "password"}
                className="border p-2 rounded-md outline-2 focus:outline outline-slate-300 transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex justify-between items-center mb-4">
                <div className="mt-2">
                  <input
                    type="checkbox"
                    name="show-password"
                    id="show-password"
                    className="mr-1"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                  <label htmlFor="show-password" className="text-sm font-light">
                    Show Password
                  </label>
                </div>
                <button
                  onClick={openModal}
                  className="text-right underline text-xs text-teal-800 cursor-pointer"
                  type="button"
                >
                  Forgot password?
                </button>
              </div>
              <button
                className="bg-slate-800 text-white p-2 rounded-md w-full focus:ring-4 ring-slate-300"
                type="submit"
              >
                <p className="font-semibold">
                  {isLoading ? "Loading..." : "Login"}
                </p>
              </button>
              <Link
                to={"/"}
                className="bg-slate-300 text-slate-500 p-2 rounded-md w-full focus:ring-4 ring-slate-300 mt-2"
              >
                <p className="font-semibold text-center">Back to Home</p>
              </Link>
            </form>
          </div>
        </>
      )}
    </>
  );
}
