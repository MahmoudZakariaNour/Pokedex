import './App.css';
import { UsePokes } from './hooks/UsePokes';
import { Poke } from './components/Poke';

function App() {
    var pokes = UsePokes();
    var namesList = "Empty";
    if (pokes.length != 0) {
        console.log(pokes);
        namesList = pokes.results.map((Pok) => (
            <Poke key={Pok.name} data={Pok} />
        ))
    } else {
        console.log("Empty");
    }
    return (
        <div>
            {namesList}
        </div>
    );
}

export default App;
