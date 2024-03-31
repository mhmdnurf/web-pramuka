import React from "react";
import Header from "./components/Header";
import Cover from "./components/Cover";
import Statistic from "./components/Statistic";
import Logo from "./components/Logo";
import SandiAmbalan from "./components/SandiAmbalan";
import DaftarPrestasi from "./components/DaftarPrestasi";
import StrukturOrganisasi from "./components/StrukturOrganisasi";
import Footer from "./components/Footer";

export default function Portofolio(): React.JSX.Element {
  return (
    <>
      <div className="bg-white">
        <Header />
        <Cover />
        <Statistic />
        <Logo />
        <SandiAmbalan />
        <DaftarPrestasi />
        <StrukturOrganisasi />
        <Footer />
      </div>
    </>
  );
}
