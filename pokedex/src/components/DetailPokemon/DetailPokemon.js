import React, { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { Container, Identificacao, Button, Pokemon, Img, About, Type, Abilities, DivGraf, ValorPlot } from "./StyledDetailPage";

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
                                    <h2>Abilities</h2>
                                    <Abilities>
                                {pokemon.abilities.map((abilitiesPokemon) => {
                                    return (
                                        <div>
                                            <h4>{abilitiesPokemon.ability.name}</h4>
                                        </div>
                                    )
                                })}
                                    </Abilities>
                            </About>
                        </Pokemon>
                        <DivGraf>    
                            {pokemon.stats.map((statsPokemon) => {
                                return (
                                    <ValorPlot valor={`${statsPokemon.base_stat}%`}>{statsPokemon.stat.name}: {statsPokemon.base_stat}</ValorPlot>
                                  
                                )
                            })}
                        </DivGraf>
                    </Container >
                )
            }
        })

    )
}