import React, { useContext} from "react";
import { Card, ButtonsTag, ImgTag, NameId, ContainerPai } from "./styled";
import { useHistory } from "react-router-dom";
import { goToDetailPage } from "../../routes/cordinator";
import { GlobalStateContext } from "../../global/GlobalStateContext";


export default function CardPokemon() {
    const history = useHistory()

    const {pokedex, setpokedex, pokemons} = useContext(GlobalStateContext)
    
    const addPokemonToPokedex = (pokemonToAdd) => {
        const index = pokedex.findIndex((pokemonInPokedex) => {
            if (pokemonInPokedex.id === pokemonToAdd.id) {
                return true
            } else {
                return false
            }
        })

        if (index === -1) {
            const pokedexCopy = [...pokedex, pokemonToAdd]
            setpokedex(pokedexCopy)
        }        
    }


    return (
        pokemons && pokemons.map((pokemon) => {
            return (
                <ContainerPai>
                    <Card key={pokemon.id}>
                        <ImgTag>
                            <img src={pokemon.sprites.other["official-artwork"].front_default} alt="Pokemon" />
                        </ImgTag>
                        <NameId>
                            <h5>{pokemon.id < 10 ? `N° 00${pokemon.id}` : pokemon.id < 100 ? `N° 0${pokemon.id}` : `N° ${pokemon.id}`}</h5>
                            <h3><strong>{`${(pokemon.name)[0].toUpperCase() + (pokemon.name).substr(1)}`}</strong></h3>
                        </NameId>
                        
                        <ButtonsTag>
                            <button onClick={() => goToDetailPage(history, pokemon.id)}>Detalhes</button>
                            <button onClick={() => addPokemonToPokedex(pokemon)}>Adicionar</button>
                        </ButtonsTag>
                    </Card>
                </ContainerPai>
            )
        }) 
    )
}
