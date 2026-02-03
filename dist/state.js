import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import { getCommands } from "./command.js";
import { PokeAPI } from "./pokeapi.js";
export function initState() {
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: 'Pokedex > ',
    });
    const commands = getCommands();
    const pokeAPI = new PokeAPI();
    return {
        rl,
        commands,
        pokeAPI
    };
}
