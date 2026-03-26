import { State } from './state.js';
import { PokeAPI, ShallowLocations, PokemonEncounters } from './pokeapi.js';

export async function commandExplore(state: State, ...args: string[]): Promise<void> {
    
    
    const currURL = `${PokeAPI.baseURL}/location-area/${args[1]}/`;

    console.log(currURL);

    let resources: PokemonEncounters;
    if (state.pokeCache?.get<PokemonEncounters>(currURL)) {
        resources = state.pokeCache?.get<PokemonEncounters>(currURL)!;
    } else {
        resources = await state.pokeAPI.fetchPokemons(currURL);
        state.pokeCache?.add(currURL, resources);
    }
    
    // console.log(resources);

    for (const resource of resources.pokemon_encounters) {
        console.log(resource.pokemon.name);
        //state.prevLocationsURL = resource.url;
    }
}