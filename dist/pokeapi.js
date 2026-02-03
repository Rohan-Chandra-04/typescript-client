export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    constructor() { }
    async fetchLocations(pageURL) {
        // implement this
        const response = await fetch(`${PokeAPI.baseURL}/location-area/?limit=20&offset=${pageURL ?? '0'}`);
        return response.json();
    }
    async fetchLocation(locationName) {
        // implement this
        const response = await fetch(`${PokeAPI.baseURL}/location/${locationName}`);
        return response.json();
    }
}
