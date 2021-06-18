import React, {useContext} from 'react';
import { useParams } from 'react-router-dom'
import { GlobalStateContext } from "../../global/GlobalStateContext";

export default function DetailPokemon() {
    const params = useParams();
    const {pokedex, setpokedex, pokemons} = useContext(GlobalStateContext)

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
                    <div>
                        <p>{pokemon.name}</p>
                        <img src={pokemon.sprites.other["official-artwork"].front_default} />
                        <button onClick={() => addAndRemovePokemon(pokemon)}>💛/❌</button>
                    </div>
                )
            }
        })
        
    )
}