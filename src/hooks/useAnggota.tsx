import React from "react";
import { app } from "../utils/firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function useAnggota() {
  const [jumlahLakiLaki, setJumlahLakiLaki] = React.useState<string>("");
  const [jumlahPerempuan, setJumlahPerempuan] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const fetchDataAnggota = React.useCallback(async () => {
    setIsLoading(true);

    try {
      const auth = getAuth();

      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const uid = user.uid;
          const db = getFirestore(app);
          const query = doc(db, "users", uid);
          const snapshot = await getDoc(query);
          if (snapshot.exists()) {
            const data = snapshot.data();
            if (data) {
              setJumlahLakiLaki(data.jumlahLakiLaki);
              setJumlahPerempuan(data.jumlahPerempuan);
            }
          }
        }
      });
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchDataAnggota();
  }, [fetchDataAnggota]);

  return { jumlahLakiLaki, jumlahPerempuan, isLoading };
}
