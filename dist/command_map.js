export async function commandMap(state) {
    let length = state.prevLocationsURL?.length ?? 0;
    let offset = state.prevLocationsURL?.slice(length - 3, length - 1) ?? '0';
    const resources = await state.pokeAPI.fetchLocations(offset);
    for (const resource of resources.results) {
        console.log(resource.name);
        state.prevLocationsURL = resource.url;
    }
}
