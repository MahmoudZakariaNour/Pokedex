import { useEffect, useState } from "react";


export function UsePokes(url) {
    const [pokes, setPokes] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                setPokes(json)
                // console.log(json);
            });
    });

    return pokes;
}