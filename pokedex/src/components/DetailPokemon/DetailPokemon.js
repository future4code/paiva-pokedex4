import React, { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { Container, Identificacao, Button, Pokemon, Img, About, Type, Card1, Abilities, Stats } from "./StyledDetailPage";

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
            alert("Pokemon adicionado a pokedex")
        } else if (index !== -1) {
            const pokedexCopy = pokedex.filter((pokemonInPokedex) => {
                if (pokemonInPokedex.id === pokemon.id) {
                    return false
                }
                return true
            })
            setpokedex(pokedexCopy)
            alert("Pokemon removido da pokedex")
        }


    }

    return (

        pokemons.map((pokemon) => {
            if (pokemon.id == params.id) {
                return (
                    <Container>
                        <Identificacao>
                            <h2>{pokemon.id < 10 ? `N° 00${pokemon.id}` : pokemon.id < 100 ? `N° 0${pokemon.id}` : `N° ${pokemon.id}`} /{pokemon.name}</h2>
                            <Button>
                            <button onClick={() => addAndRemovePokemon(pokemon)}>Adicionar/Remover Pokedex</button> 
                            </Button>
                               
                        </Identificacao>

                        <Pokemon>
                            <Img>
                                <div class="teste">
                                    <img class="pri" src={pokemon.sprites.front_default} alt="Pokemon" />
                                    <img class="seg" src={pokemon.sprites.back_default} alt="Pokemon" />
                                </div>
                            </Img>

                            <About>
                              <h2>Type:</h2>
                                <Type>
                                {pokemon.types.map((typePokemon) => {
                                    return (

                                        <div>
                                            <p>{typePokemon.type.name}</p>
                                        </div>
                                    )
                                })}
                                </Type>
                                <Card1>
                                    <Stats>
                                        <h3>Stats:</h3>
                                    {pokemon.stats.map((statsPokemon) => {
                                        return (
                                            <div>
                                                <h4>{statsPokemon.stat.name}</h4>
                                                <h4>{`: ${statsPokemon.base_stat}`}</h4>
                                            </div>
                                        )
                                    })}
                                    </Stats>
                                    <Abilities>
                                    <h3>Abilities:</h3>
                                {pokemon.abilities.map((abilitiesPokemon) => {
                                    return (
                                        <div>
                                            <h4>{abilitiesPokemon.ability.name}</h4>
                                        </div>
                                    )
                                })}
                                    </Abilities>
                                </Card1>
                            </About>
                        </Pokemon>
                    </Container >
                )
            }
        })

    )
}
