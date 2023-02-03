import * as readline from "readline";
import clipboardy from "clipboardy";

const DECADE = 1950;
const GENERATOR_VERSION = 4;
const ASPECT_RATIO_X = 2;
const ASPECT_RATIO_Y = 3;

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const createPrompt = (prompt) => {
  return `${DECADE}s, iconic mid century, without text, ${prompt} --ar ${ASPECT_RATIO_X}:${ASPECT_RATIO_Y} --v ${GENERATOR_VERSION}`;
};

const init = () => {
  readlineInterface.question("What's your idea?  ", (answer) => {
    const prompt = createPrompt(answer.trim().toLowerCase());
    clipboardy.writeSync(prompt);
    console.log(">  --------------------------------");
    console.log(">");
    console.log(`>  ${prompt}`);
    console.log(">");
    console.log(">  Copied to clipboard! Enjoy 🔥🔥🔥");
    console.log("--------------------------------");
    console.log("");
    init();
  });
};

init();
