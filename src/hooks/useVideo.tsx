import React from "react";
import { app } from "../utils/firebase";
import { collection, getDocs, getFirestore } from "firebase/firestore";

interface Video {
  id: string;
  videoURL: string;
}

export default function useVideo() {
  const [dataVideo, setDataVideo] = React.useState<Video[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const fetchDataVideo = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const db = getFirestore(app);
      const query = collection(db, "video");
      const snapshot = await getDocs(query);

      const data: Video[] = [];
      snapshot.forEach((doc) => {
        const docData = doc.data() as Video;
        docData.id = doc.id;
        data.push(docData);
      });
      setDataVideo(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchDataVideo();
  }, [fetchDataVideo]);

  return { dataVideo, isLoading };
}
