import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import { getCommands } from "./command.js";
import { PokeAPI } from "./pokeapi.js";
import { Cache } from "./pokecache.js";
export function initState() {
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: 'Pokedex > ',
    });
    const commands = getCommands();
    const pokeAPI = new PokeAPI();
    const pokeCache = new Cache(300000); // Cache entries expire after 5 minutes
    return {
        rl,
        commands,
        pokeAPI,
        pokeCache
    };
}
