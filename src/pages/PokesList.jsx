import { Poke } from './../components/Poke';
export function PokesList(pokes){
    var namesList = "Empty";
    if (pokes.length != 0) {
        console.log(pokes);
        namesList = pokes.results.map((Pok) => (
            <Poke key={Pok.name} data={Pok} />
        ))
    } else {
        console.log("Empty");


    }
}
