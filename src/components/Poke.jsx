// import { Link } from "react-router-dom";
var lnk;
export function Poke({ data }) {
    
    lnk = data.url;
    return (
        <div>
            <h2>{data.name}</h2>
            {/* <h3>{data.url}</h3> */}
            <button onClick={PokeDetails}>Details</button>
            {/* <link>De</link> */}
            {/* <Link to={data.link}>{data.name}</Link> */}
        </div>
    );
}

function PokeDetails() {
    console.log(lnk);
}