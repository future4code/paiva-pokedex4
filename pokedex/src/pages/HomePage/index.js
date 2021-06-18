import React from "react";
import CardPokemon from "../../components/CardPokemon";
import Header from '../../components/Header/Header'
import {Main} from './styled'
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <Main>
        <CardPokemon/>
      </Main>
      <Footer />
    </div>
  );
}

export default HomePage;
