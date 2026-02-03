import { createInterface, type Interface } from "node:readline";
import {  stdin, stdout } from "node:process";
import { getCommands } from "./command.js";
import { PokeAPI } from "./pokeapi.js";

export type State = {
    rl: Interface;
    commands: Record<string, CLICommand>;
    pokeAPI: PokeAPI;
    prevLocationsURL?: string;
};

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export function initState() : State{
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