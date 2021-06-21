import React from "react";
import Header from "../../components/Header/Header";
import DetailPokemon from '../../components/DetailPokemon/DetailPokemon'
import Footer from "../../components/Footer/Footer";
import styled from 'styled-components'

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function DetailPage() {
  return (
    <Div>
      <Header />
      <DetailPokemon />
    </Div>
  );
}

export default DetailPage;