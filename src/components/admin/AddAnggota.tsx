import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../../utils/firebase";
import { getFirestore, updateDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default function AddAnggota(): React.JSX.Element {
  const navigate = useNavigate();
  const [laki, setLaki] = React.useState<string>("");
  const [perempuan, setPerempuan] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const auth = getAuth(app);
    const user = auth.currentUser;

    try {
      const db = getFirestore(app);
      if (user) {
        await updateDoc(doc(db, "users", user?.uid), {
          jumlahLakiLaki: laki,
          jumlahPerempuan: perempuan,
        });
      }
      console.log("Document successfully written!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="py-8 bg-slate-700 sticky top-0">
        <h1 className="mx-20 text-2xl text-white font-semibold">
          Jumlah Anggota
        </h1>
      </div>
      <div className="mt-10 mx-20">
        <Link to={"/dashboard"}>
          <button className="bg-slate-600 text-white px-4 py-2 rounded-lg outline-none focus:ring-4 transition-all ring-slate-300">
            Kembali
          </button>
        </Link>
        <form
          className="flex flex-col mt-4 mb-10 border-4 rounded-xl p-4"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="tanggal"
            className="text-lg font-semibold text-slate-700"
          >
            Jumlah Laki Laki
          </label>
          <input
            type="text"
            className="border p-2 my-2 rounded-md outline-none focus:ring-2 ring-slate-300 transition-all"
            placeholder="Masukkan Jumlah Laki Laki"
            value={laki}
            onChange={(e) => setLaki(e.target.value)}
          />
          <label
            htmlFor="tanggal"
            className="text-lg font-semibold text-slate-700"
          >
            Jumlah Perempuan
          </label>
          <input
            type="text"
            className="border p-2 my-2 rounded-md outline-none focus:ring-2 ring-slate-300 transition-all"
            placeholder="Masukkan Jumlah Perempuan"
            value={perempuan}
            onChange={(e) => setPerempuan(e.target.value)}
          />
          <button
            className="bg-slate-600 text-white px-4 py-2 rounded-lg outline-none focus:ring-4 transition-all ring-slate-300 mt-4 font-semibold"
            type="submit"
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}
