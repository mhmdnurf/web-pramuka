import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { app } from "../../utils/firebase";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export default function EditStruktur(): React.JSX.Element {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [imageURL, setImageURL] = React.useState<string | null>(null);
  const [namaLengkap, setNamaLengkap] = React.useState<string>("");
  const [jabatan, setJabatan] = React.useState<string>("");
  const [deskripsi, setDeskripsi] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const fetchData = React.useCallback(async () => {
    try {
      const db = getFirestore(app);
      if (!id) {
        throw new Error("ID is undefined or empty");
      }
      const query = doc(db, "struktur-organisasi", id);
      const snapshot = await getDoc(query);

      if (snapshot.exists()) {
        const data = snapshot.data();
        if (data) {
          setNamaLengkap(data.namaLengkap);
          setJabatan(data.jabatan);
          setDeskripsi(data.deskripsi);
          setImageURL(data.fotoProfil);
        }
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }, [id]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle the file upload here
      setImageURL(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const form = event.target as HTMLFormElement;
    const fileInput = form.elements.namedItem(
      "file-upload"
    ) as HTMLInputElement;
    const fileToUpload = fileInput.files?.[0];

    const updateDocument = async (imageUrl: string) => {
      try {
        const db = getFirestore(app);
        if (!id) {
          throw new Error("ID is undefined or empty");
        }

        const docRef = doc(db, "struktur-organisasi", id);
        await updateDoc(docRef, {
          namaLengkap: namaLengkap,
          jabatan: jabatan,
          deskripsi: deskripsi,
          fotoProfil: imageUrl,
        });
        console.log("Document successfully updated!");
        navigate("/dashboard");
      } catch (error) {
        console.error("Error updating document: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (fileToUpload) {
      const storage = getStorage(app);
      const storageRef = ref(
        storage,
        "images/struktur-organisasi/" + fileToUpload.name
      );
      const uploadTask = uploadBytesResumable(storageRef, fileToUpload);

      uploadTask.on(
        "state_changed",
        () => {
          // Observe state change events such as progress, pause, and resume
        },
        (error) => {
          console.log(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setImageURL(downloadURL);
          updateDocument(downloadURL);
        }
      );
    } else if (imageURL) {
      updateDocument(imageURL);
    }
  };
  return (
    <>
      <div className="py-8 bg-slate-700 sticky top-0">
        <h1 className="mx-20 text-2xl text-white font-semibold">
          Tambah Struktur Organisasi
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
            htmlFor="file-upload"
            className="bg-slate-600 px-4 py-4 w-64 text-center rounded-xl font-semibold text-white cursor-pointer mb-4"
          >
            Upload Foto Profil
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          {imageURL && (
            <div className="flex justify-center items-center">
              <img
                src={imageURL}
                alt="Uploaded"
                className="mt-4 w-64 h-64 object-cover border-8 border-zinc-700  rounded-full"
              />
            </div>
          )}
          <label
            htmlFor="namaLengkap"
            className="text-lg font-semibold text-slate-700"
          >
            Nama Lengkap
          </label>
          <input
            type="text"
            className="border p-2 my-2 rounded-md outline-none focus:ring-2 ring-slate-300 transition-all"
            placeholder="Masukkan Nama Lengkap"
            value={namaLengkap}
            onChange={(e) => setNamaLengkap(e.target.value)}
          />
          <label
            htmlFor="namaLengkap"
            className="text-lg font-semibold text-slate-700"
          >
            Jabatan
          </label>
          <input
            type="text"
            className="border p-2 my-2 rounded-md outline-none focus:ring-2 ring-slate-300 transition-all"
            placeholder="Masukkan Jabatan"
            value={jabatan}
            onChange={(e) => setJabatan(e.target.value)}
          />
          <label
            htmlFor="namaLengkap"
            className="text-lg font-semibold text-slate-700"
          >
            Deskripsi Jabatan
          </label>
          <input
            type="text"
            className="border p-2 my-2 rounded-md outline-none focus:ring-2 ring-slate-300 transition-all"
            placeholder="Masukkan Deskripsi Jabatan"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
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
