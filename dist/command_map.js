import { PokeAPI } from './pokeapi.js';
export async function commandMap(state) {
    let length = state.prevLocationsURL?.length ?? 0;
    let offset = state.prevLocationsURL?.slice(length - 3, length - 1) ?? '0';
    const currURL = `${PokeAPI.baseURL}/location-area/?limit=20&offset=${offset}`;
    let resources;
    if (state.pokeCache?.get(currURL)) {
        resources = state.pokeCache?.get(currURL);
    }
    else {
        resources = await state.pokeAPI.fetchLocations(currURL);
        state.pokeCache?.add(currURL, resources);
    }
    for (const resource of resources.results) {
        console.log(resource.name);
        state.prevLocationsURL = resource.url;
    }
}
