import React from 'react'
import Header from '../../components/Header/Header'
import CardsPokedex from '../../components/CardsPokedex/CardsPokedex'
import {Main} from './styled'
import Footer from '../../components/Footer/Footer';

function PokedexPage() {
  return (
    <div>
      <Header />
      <Main>
        <CardsPokedex />
      </Main>
      <Footer />
    </div>
  );
}

export default PokedexPage;