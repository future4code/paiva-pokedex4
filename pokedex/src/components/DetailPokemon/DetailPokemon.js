import React, { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { Sprites, Tag, ContainerType, ContainerStats, ContainerAbilities, Geral } from "./StyledDetailPage";

export default function DetailPokemon() {
    const params = useParams();
    const { pokedex, setpokedex, pokemons } = useContext(GlobalStateContext)

    const addAndRemovePokemon = (pokemon) => {
        console.log(pokemon)
        const index = pokedex.findIndex((pokemonInPokedex) => {
            if (pokemonInPokedex.id === pokemon.id) {
                return true
            } else {
                return false
            }
        })
        if (index === -1) {
            const pokedexCopy = [...pokedex, pokemon]
            setpokedex(pokedexCopy)
        } else if (index !== -1) {
            const pokedexCopy = pokedex.filter((pokemonInPokedex) => {
                if (pokemonInPokedex.id === pokemon.id) {
                    return false
                }
                return true
            })
            setpokedex(pokedexCopy)
        }

        console.log("index: ", pokedex)
    }

    return (

        pokemons.map((pokemon) => {
            if (pokemon.id == params.id) {
                return (
                    <Geral>
                        <Tag>
                            <h4>{pokemon.id < 10 ? `N° 00${pokemon.id}` : pokemon.id < 100 ? `N° 0${pokemon.id}` : `N° ${pokemon.id}`} /
                                <button onClick={() => addAndRemovePokemon(pokemon)}>Adicionar/Remover Pokedex</button> </h4>
                            <h2>{pokemon.name}</h2>
                            <h3>Types:</h3>
                            {pokemon.types.map((typePokemon) => {
                                return (
                                    <ContainerType>
                                        <h4>{typePokemon.type.name}</h4>
                                    </ContainerType>
                                )
                            })}


                            <h3>Stats:</h3>
                            {pokemon.stats.map((statsPokemon) => {
                                return (
                                    <ContainerStats>
                                        <h4>{statsPokemon.stat.name}</h4>
                                        <h4>{`: ${statsPokemon.base_stat}`}</h4>
                                    </ContainerStats>

                                )
                            })}
                            <h3>Abilities:</h3>
                            {pokemon.abilities.map((abilitiesPokemon) => {
                                return (
                                    <ContainerAbilities>
                                        <h4>{abilitiesPokemon.ability.name}</h4>
                                    </ContainerAbilities>
                                )
                            })}
                        </Tag>
                        <Sprites>
                            <div class="teste">
                                <img class="pri" src={pokemon.sprites.front_default} alt="Pokemon" />
                                <img class="seg" src={pokemon.sprites.back_default} alt="Pokemon" />
                            </div>
                        </Sprites>
                    </Geral >
                )
            }
        })

    )
}
