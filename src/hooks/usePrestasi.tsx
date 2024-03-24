import React from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../utils/firebase";
interface Prestasi {
  tanggal: string;
  judul: string;
  deskripsi: string;
  imageURL: string;
}

export default function usePrestasi() {
  const [dataPrestasi, setDataPrestasi] = React.useState<Prestasi[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const fetchDataPrestasi = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const db = getFirestore(app);
      const query = collection(db, "prestasi");
      const snapshot = await getDocs(query);

      const data: Prestasi[] = [];
      snapshot.forEach((doc) => {
        data.push(doc.data() as Prestasi);
      });
      setDataPrestasi(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchDataPrestasi();
  }, [fetchDataPrestasi]);

  return { dataPrestasi, isLoading };
}
