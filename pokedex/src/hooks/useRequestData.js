import axios from "axios";
import { useEffect, useState } from "react";


const useRequestData = ((url, initialState) => {
    const [data, setData] = useState(initialState);
    const getPokemons = (() => {
        axios.get(url)
            .then((res) => {
                setData(res.data)
            });
    });
    useEffect(() => {
        getPokemons()
    }, []);

    // const detailsPokemon = getPokemons() && getPokemons.map((pokemon) => {
    //     axios.get(pokemon.url)
    //     .then(() => {
    //         console.log("oi")
    //     });
    // });
    // return (
    //     <div>
    //         { () => getPokemons() && getPokemons.map((pokemon) => {
    //             return(
    //                 <p>{pokemon.data}</p>
    //             )
    //         })}
    //     </div>
    // )

console.log(data)
    return data;
});

export default useRequestData;