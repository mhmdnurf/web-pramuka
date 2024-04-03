import { FaVideo } from "react-icons/fa6";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";
export default function Video() {
  const isNotSmallScreen = useMediaQuery({ minWidth: 640 });

  function PlayIcon() {
    return (
      <>
        <div className="sm:p-8 p-4 bg-white rounded-full hover:scale-110 border-4 border-slate-500">
          <FaVideo
            className="text-6xl text-amber-500"
            size={isNotSmallScreen ? 100 : 32}
          />
        </div>
      </>
    );
  }
  return (
    <>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(./dokumentasi.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="video"
      >
        <div className="w-full flex justify-center sm:py-20 sm:px-20 p-8 flex-col  backdrop-blur-sm bg-opacity-25 backdrop-filter">
          <p className="text-2xl sm:text-4xl md:text-6xl font-bold text-white sm:p-4 mb-4">
            Videography
          </p>
          <div className="w-full flex justify-center overflow-hidden rounded-3xl">
            <div
              style={{
                overflow: "hidden",
                width: isNotSmallScreen ? "800px" : "300px",
                height: isNotSmallScreen ? "500px" : "200px",
              }}
              className="rounded-3xl shadow-2xl border-4 border-slate-300 hover:scale-105 transition-transform duration-500 ease-in-out sm:mt-8"
            >
              <ReactPlayer
                url="https://www.youtube.com/watch?v=-TXtyYZIiWc"
                loop={true}
                width="100%"
                height="100%"
                playing={true}
                playIcon={<PlayIcon />}
                light={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
