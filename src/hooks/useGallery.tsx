import React from "react";
import { app } from "../utils/firebase";
import { collection, getDocs, getFirestore } from "firebase/firestore";

interface Gallery {
  id: string;
  judul: string;
  imageURL: string;
}

export default function useGallery() {
  const [dataGallery, setDataGallery] = React.useState<Gallery[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const fetchDataGallery = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const db = getFirestore(app);
      const query = collection(db, "gallery");
      const snapshot = await getDocs(query);

      const data: Gallery[] = [];
      snapshot.forEach((doc) => {
        const docData = doc.data() as Gallery;
        docData.id = doc.id;
        data.push(docData);
      });
      setDataGallery(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateGallery = (id: string) => {
    setDataGallery((prevData) =>
      prevData.filter((organisasi) => organisasi.id !== id)
    );
  };

  React.useEffect(() => {
    fetchDataGallery();
  }, [fetchDataGallery]);

  return { dataGallery, isLoading, updateGallery };
}
