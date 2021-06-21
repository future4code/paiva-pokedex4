import React from 'react'
import logoPokedex from '../../img/logo-comp.png'
import { useHistory } from 'react-router'
import {goToHomePage, goToPokedexPage} from '../../routes/cordinator'
import {Main, Logo} from './styled'

export default function Header() {

    const history = useHistory()
 
    switch (history.location.pathname) {
        case "/":
            return (
                <Main>
                    <a onClick={() => goToHomePage(history)}><Logo src={logoPokedex} alt="logomarca"/> </a>
                    <button onClick={() => goToPokedexPage(history)}>Pokedex</button>
                </Main>
            )
        case "/pokedex":
            return (
                <Main>
                    <a onClick={() => goToHomePage(history)}><Logo src={logoPokedex} alt="logomarca"/> </a>
                </Main>
            )
        case `/details/${(history.location.pathname).substr(9)}`:
            return (
                <Main>
                    <a onClick={() => goToHomePage(history)}><Logo src={logoPokedex} alt="logomarca"/> </a>
                    <button onClick={() => goToPokedexPage(history)}>Pokedex</button>
                </Main>
            )    
        default:
            return (
                <Main>
                    <a onClick={() => goToHomePage(history)}><Logo src={logoPokedex} alt="logomarca"/> </a>
                </Main>
            )
    }
}