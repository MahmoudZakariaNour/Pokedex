import './App.css';
import { UsePokes } from './hooks/UsePokes';
// import { Poke } from './components/Poke';
import { PokesList } from './pages/PokesList'
import { useEffect, useState } from 'react';
// let pokesUrl = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=20";

function App() {

    const [pokesUrl, setPokesUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=10&offset=20");
    const [stt, setStt] = useState(0);
    
useEffect(() => {
    console.log("Inside UseEffect");
    
});

    function sttUp(){
        setStt(stt + 1);
    }
    function nextPokes(){
        setPokesUrl(pokes.next)
    }
    var pokes = UsePokes(pokesUrl);
    var namesList = "Empty";
    if (pokes.length != 0) {
        console.log(pokes);
        namesList = PokesList(pokes);

    } else {
        console.log("Empty");
    }
    // function nextPokes() {
    //     pokesUrl = pokes.next;
    //     // pokes = UsePokes(pokes.next)
    //     console.log(`next }`)
    // }
    
    return (
        <div>
            {stt}
            <button onClick={nextPokes}>Next</button>
            {namesList}
        </div>
    );
}


export default App;
