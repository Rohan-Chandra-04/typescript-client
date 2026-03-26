import { createInterface, type Interface } from "node:readline";
import {  stdin, stdout } from "node:process";
import { getCommands } from "./command.js";
import { PokeAPI } from "./pokeapi.js";
import {Cache} from "./pokecache.js";

export type State = {
    rl: Interface;
    commands: Record<string, CLICommand>;
    pokeAPI: PokeAPI;
    prevLocationsURL?: string;
    nextLocationsURL?: string;
    pokeCache?: Cache;
};

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export function initState() : State{
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