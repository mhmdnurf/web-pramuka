import React from "react";
import { app } from "../utils/firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { FaVideo } from "react-icons/fa6";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";
export default function Video() {
  const isNotSmallScreen = useMediaQuery({ minWidth: 640 });
  const [videoURL, setVideoURL] = React.useState<string>("");

  function PlayIcon() {
    return (
      <>
        <div className="sm:p-8 p-4 bg-white rounded-full backdrop-blur-lg backdrop-filter bg-opacity-15 hover:scale-110 border-4 border-slate-500">
          <FaVideo
            className="text-6xl text-slate-100"
            size={isNotSmallScreen ? 100 : 32}
          />
        </div>
      </>
    );
  }

  const fetchVideo = React.useCallback(async () => {
    try {
      const uid = "6GCi8f6OLaC7vHbWX0tt";
      const db = getFirestore(app);
      const query = doc(db, "video", uid);
      const snapshot = await getDoc(query);
      if (snapshot.exists()) {
        const data = snapshot.data();
        if (data) {
          setVideoURL(data.videoURL);
        }
        console.log(data);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }, []);

  React.useEffect(() => {
    fetchVideo();
  }, [fetchVideo]);

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
          <p className="text-4xl sm:text-6xl font-bold text-white sm:p-4 mb-8">
            Videography
          </p>
          <div className="w-full flex justify-center overflow-hidden rounded-3xl">
            <div
              style={{
                overflow: "hidden",
                width: isNotSmallScreen ? "800px" : "300px",
                height: isNotSmallScreen ? "500px" : "200px",
              }}
              className="rounded-3xl shadow-2xl border-4 border-slate-300 sm:hover:scale-105 sm:transition-transform sm:duration-500 sm:ease-in-out sm:mt-8"
            >
              <ReactPlayer
                url={videoURL}
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
