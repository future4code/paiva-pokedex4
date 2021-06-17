import React from "react";
import { Card, ButtonsTag, ImgTag, NameId } from "./styled";
import { useHistory } from "react-router-dom";
import { goToDetailPage, goToPokedexPage } from "../../routes/cordinator";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/baseUrl";
import axios from "axios";
import Header from "../Header/Header";

export default function CardPokemon() {
    const history = useHistory()

    const pokemons = useRequestData(BASE_URL, [], 5)
    console.log(pokemons)
    return (
        pokemons && pokemons.map((pokemon) => {
            return (
                <Card key={pokemon.id}>
                    <ImgTag>
                        <img src={pokemon.sprites.other["official-artwork"].front_default} />
                    </ImgTag>
                    <NameId>
                        <h5>{pokemon.id < 10 ? `N° 00${pokemon.id}` : pokemon.id < 100 ? `N° 0${pokemon.id}` : `N° ${pokemon.id}`}</h5>
                        <h3><strong>{`${(pokemon.name)[0].toUpperCase() + (pokemon.name).substr(1)}`}</strong></h3>
                    </NameId>
                    
                    <ButtonsTag>
                        <button onClick={() => goToDetailPage(history)}>Detalhes</button>
                    </ButtonsTag>
                    <ButtonsTag>
                        <button onClick={() => goToPokedexPage(history)}>Adicionar</button>
                    </ButtonsTag>
                </Card>
            )
        })
    )
}