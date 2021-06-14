import React from "react";
import { Main, ButtonsTag, ImgTag } from "./styled";
import { useHistory } from "react-router-dom";
import { goToDetailPage, goToPokedexPage } from "../../routes/cordinator";

export default function CardPokemon() {
    const history = useHistory()

    return (
        <Main>
            <ImgTag>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
            </ImgTag>
            <ButtonsTag>
                <button onClick={() => goToDetailPage(history)}>Detalhes</button>
            </ButtonsTag>
            <ButtonsTag>
                <button onClick={() => goToPokedexPage(history)}>Adicionar</button>
            </ButtonsTag>
        </Main>
    )
}