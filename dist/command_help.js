export async function commandHelp(state) {
    console.log(`Welcome to the Pokedex!`);
    console.log(`Usage:`);
    for (const [name, command] of Object.entries(state.commands)) {
        console.log(`${name}: ${command.description}`);
    }
}
