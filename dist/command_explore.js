import { PokeAPI } from './pokeapi.js';
export async function commandExplore(state, ...args) {
    const currURL = `${PokeAPI.baseURL}/location-area/${args[1]}/`;
    console.log(currURL);
    let resources;
    if (state.pokeCache?.get(currURL)) {
        resources = state.pokeCache?.get(currURL);
    }
    else {
        resources = await state.pokeAPI.fetchPokemons(currURL);
        state.pokeCache?.add(currURL, resources);
    }
    console.log(resources);
    for (const resource of resources.pokemon_encounters) {
        console.log(resource.pokemon.name);
        //state.prevLocationsURL = resource.url;
    }
}
