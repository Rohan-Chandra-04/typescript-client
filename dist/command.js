import { commandExit } from './command_exit.js';
import { commandHelp } from './command_help.js';
import { commandMap } from './command_map.js';
export function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        // can add more commands here
        help: {
            name: "help",
            description: "Displays available commands",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "displays the names of 20 location areas in the Pokemon world.Each subsequent call to map should display the next 20 locations, and so on.",
            callback: commandMap,
        },
    };
}
