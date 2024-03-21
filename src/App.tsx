import Cover from "./components/Cover";
import DaftarPrestasi from "./components/DaftarPrestasi";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sejarah from "./components/Sejarah";
import Statistic from "./components/Statistic";
import StrukturOrganisasi from "./components/StrukturOrganisasi";
import VisiMisi from "./components/VisiMisi";

export default function App() {
  return (
    <>
      <div className="bg-white">
        <Header />
        <Cover />
        <Statistic />
        <Sejarah />
        <VisiMisi />
        <DaftarPrestasi />
        <StrukturOrganisasi />
        <Footer />
      </div>
    </>
  );
}
