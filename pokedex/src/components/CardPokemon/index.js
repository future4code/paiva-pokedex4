import React from "react";
import { Main, ButtonsTag, ImgTag } from "./styled";
import { useHistory } from "react-router-dom";
import { goToDetailPage, goToPokedexPage } from "../../routes/cordinator";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/baseUrl";
import axios from "axios";
import Header from "../Header/Header";

export default function CardPokemon() {
    const history = useHistory()
    const pokemons = (useRequestData(BASE_URL, [], 10))
    console.log("index:", pokemons)

    const renderCardsPokemons = pokemons && pokemons.map((pokemon) => {
        console.log(pokemon.name)
    })

    return (
        <div>
            <Header />
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
        </div>
        
    )
}