import React from 'react'
import Header from '../../components/Header/Header'
import CardsPokedex from '../../components/CardsPokedex/CardsPokedex'
import {Main} from './styled'

function PokedexPage() {
  return (
    <div>
      <Header />
      <Main>
        <CardsPokedex />
      </Main>
    </div>
  );
}

export default PokedexPage;