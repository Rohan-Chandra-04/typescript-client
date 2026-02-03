import { CLICommand } from './state.js';
import { State } from './state.js';

export async function commandHelp(state: State) : Promise<void> {
    console.log(`Welcome to the Pokedex!`);
    console.log(`Usage:`);

    for (const [name, command] of Object.entries(state.commands)) {
        console.log(`${name}: ${command.description}`);
    }
}