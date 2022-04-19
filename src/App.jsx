import './App.css';
import { UsePokes } from './hooks/UsePokes';
import { Poke } from './components/Poke';
import { PokesList } from './pages/PokesList'
let pokesUrl = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=20";

function App() {
    // this.state = {
    //     loading: true,
    //     activePage: 1,
    //     data: {},
    //     url: "https://reqres.in/api/users?page="
    //   };
    var pokes = UsePokes(pokesUrl);
    var namesList = "Empty";
    if (pokes.length != 0) {
        console.log(pokes);
        namesList = PokesList(pokes);

    } else {
        console.log("Empty");
    }
    function nextPokes() {
        pokesUrl = pokes.next;
        // pokes = UsePokes(pokes.next)
        console.log(`next }`)
    }
    
    return (
        <div>
            <button onClick={nextPokes}>Next</button>
            {namesList}
        </div>
    );
}


export default App;
