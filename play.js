const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const conn = connect();

setupInput(conn);

/*// setup interface to handle user input from stdin
const stdin = process.stdin;

const setupInput = function () {
  //const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};
Update play.js to pass the object returned from connect into the setupInput function.
const handleUserInput = function (key) {
    // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
      process.exit();
   }
  
};

setupInput();*/
