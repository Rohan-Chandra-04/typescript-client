// repl.js actually refers to repl.ts
import { startREPL } from "./repl.js";
import { initState } from "./state.js";

function main() {
  const stateOne = initState();
  startREPL(stateOne);
}

main();