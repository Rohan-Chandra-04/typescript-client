import { exit } from 'node:process';
export function cleanInput(input) {
    // logic goes here
    //let words = input.split(' ');
    let words = [];
    let stIdx = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ' && stIdx === i) {
            stIdx++;
        }
        else if (input[i] === ' ' && stIdx !== i) {
            words.push(input.substring(stIdx, i));
            stIdx = i + 1;
        }
    }
    if (stIdx < input.length) {
        words.push(input.substring(stIdx));
    }
    words = words.map(word => word.toLowerCase());
    words = words.map(word => word.trim());
    return words;
}
export function startREPL(state) {
    try {
        const { rl, commands } = state;
        rl.prompt();
        rl.on('line', async (line) => {
            if (line === '') {
                rl.prompt();
                exit(0);
            }
            let words = cleanInput(line);
            // console.log(`Your command was: ${words[0]}`);
            await commands[words[0]]?.callback(state, ...words);
            rl.prompt();
        });
    }
    catch (error) {
        console.error("An error occurred in the REPL:", error);
    }
}
