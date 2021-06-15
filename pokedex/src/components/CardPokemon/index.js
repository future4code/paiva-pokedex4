import React from "react";
import { Main, ButtonsTag, ImgTag } from "./styled";
import { useHistory } from "react-router-dom";
import { goToDetailPage, goToPokedexPage } from "../../routes/cordinator";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/baseUrl";
import axios from "axios";

export default function CardPokemon() {
    const history = useHistory()
    const pokemons = (useRequestData(BASE_URL, {})).results
    const teste = (useRequestData(`${BASE_URL}/1`, {}))
    console.log(pokemons)

    // const listPokemons = pokemons && pokemons.map((pokemon) => {
    //     const getPokemons = (() => {
    //         axios.get(pokemon.url)
    //             .then((res) => {
    //                 setData(res.data)
    //             });
    //     });
    // }) 
 
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