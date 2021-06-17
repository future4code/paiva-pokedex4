import axios from "axios";
import { useEffect, useState } from "react";


const useRequestData = ((url, initialState, qnttPokemons) => {

    const [data, setData] = useState(initialState);
    let pokemonsDetails = [];
    
    const getPokemons = (() => {
        
        for (let i = 1; i <= qnttPokemons; i++) {
            axios
            .get(`${url}/${i}`)
            .then((res) => {
                pokemonsDetails.push(res.data)
                if (pokemonsDetails.length === qnttPokemons) {
                    pokemonsDetails.sort((a,b) => {
                        return a.id - b.id
                    })
                    setData(pokemonsDetails)
                }  
            })
        }
    })
    
    useEffect(() => {
        getPokemons()
    }, []);

    return data;
});

export default useRequestData;