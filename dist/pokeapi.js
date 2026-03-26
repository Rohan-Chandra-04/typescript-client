export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    constructor() { }
    async fetchLocations(pageURL) {
        // implement this
        const response = await fetch(pageURL ?? "");
        return response.json();
    }
    async fetchPokemons(url) {
        // implement this
        const response = await fetch(url);
        console.log(response);
        return response.json();
    }
    async fetchLocation(locationName) {
        // implement this
        const response = await fetch(`${PokeAPI.baseURL}/location/${locationName}`);
        return response.json();
    }
}
