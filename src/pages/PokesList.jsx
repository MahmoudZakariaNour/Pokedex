import { Poke } from './../components/Poke';
export function PokesList(pokes) {
    return (
        pokes.results.map((Pok) => (
            <Poke key={Pok.name} data={Pok} />
        ))
    );
}
