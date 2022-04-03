import { useEffect, useState } from "react";

const pokesUrl = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20";

export function UsePokes() {
    const [pokes, setPokes] = useState([]);

    useEffect(() => {
        fetch(pokesUrl)
            .then((res) => res.json())
            .then((json) => {
                setPokes(json)
                // console.log(json);
            });
    }, []);

    return pokes;
}