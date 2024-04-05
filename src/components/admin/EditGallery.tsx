import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { app } from "../../utils/firebase";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

export default function EditGallery(): React.JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [imageURL, setImageURL] = React.useState<string | null>(null);
  const [judul, setJudul] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const fetchData = React.useCallback(async () => {
    try {
      const db = getFirestore(app);
      const query = doc(db, "gallery", id || "");
      const snapshot = await getDoc(query);

      if (snapshot.exists()) {
        const data = snapshot.data();
        if (data) {
          setJudul(data.judul);
          setImageURL(data.imageURL);
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

        const docRef = doc(db, "gallery", id);
        await updateDoc(docRef, {
          judul: judul,
          imageURL: imageUrl,
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
        "images/daftar-gallery/" + fileToUpload.name
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
          Tambah Prestasi
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
            Upload Image
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
                className="mt-4 max-w-[600px] max-h-[400px] object-cover border-8 border-zinc-700  rounded-md"
              />
            </div>
          )}
          <label
            htmlFor="tanggal"
            className="text-lg font-semibold text-slate-700"
          >
            Judul Prestasti
          </label>
          <input
            type="text"
            className="border p-2 my-2 rounded-md outline-none focus:ring-2 ring-slate-300 transition-all"
            placeholder="Masukkan Judul Prestasi"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
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
