import React from "react";
import CardPokemon from "../../components/CardPokemon";
import Header from '../../components/Header/Header'
import {Main} from './styled'

function HomePage() {
  return (
    <div>
      <Header />
      <Main>
        <CardPokemon/>
      </Main>
    </div>
  );
}

export default HomePage;
