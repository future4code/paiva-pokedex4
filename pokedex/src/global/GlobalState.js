import {GlobalStateContext} from './GlobalStateContext'
import React, {useState} from 'react'
import {BASE_URL} from '../constants/baseUrl'
import useRequestData from '../hooks/useRequestData'

export const GlobalState = (props) => {

    const [pokedex, setpokedex] = useState([])

    const pokemons = useRequestData(BASE_URL, [], 50)

    return <GlobalStateContext.Provider value={{ pokedex, setpokedex, pokemons }}>
            {props.children}
        </GlobalStateContext.Provider>
    
}