import { commandExit } from './command_exit.js';
import { commandHelp } from './command_help.js';
import { commandMap } from './command_map.js';
import { commandExplore } from './command_explore.js';
import { CLICommand } from './state.js';


export function getCommands(): Record<string, CLICommand> {
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
    explore: {
      name: "explore",
      description: "displays the names of all pokemon that can be encountered in a given location area. The location area is specified as an argument to the explore command. For example, explore can be used like this: explore kanto-route-1.",
      callback: commandExplore,
    },
  };
}
