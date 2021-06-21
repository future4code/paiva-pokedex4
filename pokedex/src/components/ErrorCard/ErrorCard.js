import React from 'react'
import { useHistory } from 'react-router'
import errorPokemon from '../../img/error.gif'
import {goToHomePage} from '../../routes/cordinator'
import {Main, TituloPage} from './Styled'

export default function ErrorCard() {
    const history = useHistory()
    return (
        <Main>
            <TituloPage>
                <h1>Página não encontrada!</h1>
                <h4>Sentimos muito, mas a página que você está procurando não está aqui.</h4>
            </TituloPage>
            <a onClick={() => goToHomePage(history)}>Voltar a página inicial</a>
            <img src={errorPokemon}/>
        </Main>
    )
}
