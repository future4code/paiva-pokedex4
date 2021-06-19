import React, {useContext} from 'react';
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { useHistory } from "react-router-dom";
import { goToDetailPage } from "../../routes/cordinator";
import { Card, ButtonsTag, ImgTag, NameId } from "./styled";

export default function CardsPokedex() {

    const history = useHistory()

    const {pokedex, setpokedex} = useContext(GlobalStateContext);

    const removePokemonFromPokedex = (pokemonToRemove) => {
        const pokedexCopy = pokedex.filter((pokemonInPokedex) => {
            if (pokemonInPokedex.id === pokemonToRemove.id) {
                return false
            }
            return true
        })
        alert("Pokemon removido da pokedex")
        setpokedex(pokedexCopy)
    }

    return (
        pokedex.map((pokemon) => {
            return (
                <Card key={pokemon.id}>
                    <ImgTag>
                        <img src={pokemon.sprites.other["official-artwork"].front_default} alt="Pokemon"/>
                    </ImgTag>
                    <NameId>
                        <h5>{pokemon.id < 10 ? `N° 00${pokemon.id}` : pokemon.id < 100 ? `N° 0${pokemon.id}` : `N° ${pokemon.id}`}</h5>
                        <h3><strong>{`${(pokemon.name)[0].toUpperCase() + (pokemon.name).substr(1)}`}</strong></h3>
                    </NameId>

                    <ButtonsTag>
                        <button onClick={() => goToDetailPage(history, pokemon.id)}>Detalhes</button>
                    </ButtonsTag>
                    <ButtonsTag>
                        <button onClick={() => removePokemonFromPokedex(pokemon)}>Remover</button>
                    </ButtonsTag>
                </Card>
            )
        })
    )
    
}