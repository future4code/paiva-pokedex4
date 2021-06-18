import React from "react";
import Header from "../../components/Header/Header";
import DetailPokemon from '../../components/DetailPokemon/DetailPokemon'
import Footer from "../../components/Footer/Footer";

function DetailPage() {
  return (
    <div>
      <Header />
      <DetailPokemon />
      <Footer />
    </div>
  );
}

export default DetailPage;