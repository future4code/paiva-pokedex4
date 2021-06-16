import axios from "axios";
import { useEffect, useState } from "react";


const useRequestData = ((url, initialState, qnttPokemons) => {

    const [data, setData] = useState(initialState);
    let pokemonsDetails = [];
    
    const getPokemons = (() => {
        
        for (let i = 1; i <= qnttPokemons; i++) {
            axios
            .get(`${url}/${i}`)
            .then(res => pokemonsDetails.push(res.data))
        }
        setData(pokemonsDetails)
    })

    useEffect(() => {
        getPokemons()
    }, []);

    return data;
});

export default useRequestData;