import React from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../utils/firebase";

interface Organisasi {
  namaLengkap: string;
  jabatan: string;
  deskripsi: string;
  fotoProfil: string;
}

export default function useOrganisasi() {
  const [dataOrganisasi, setDataOrganisasi] = React.useState<Organisasi[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const fetchDataPrestasi = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const db = getFirestore(app);
      const query = collection(db, "struktur-organisasi");
      const snapshot = await getDocs(query);

      const data: Organisasi[] = [];
      snapshot.forEach((doc) => {
        data.push(doc.data() as Organisasi);
      });
      setDataOrganisasi(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchDataPrestasi();
  }, [fetchDataPrestasi]);

  return { dataOrganisasi, isLoading };
}
