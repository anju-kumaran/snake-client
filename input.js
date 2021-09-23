// setup interface to handle user input from stdin
const stdin = process.stdin;

let connection;

// Stores the active TCP connection object.


const setupInput = (conn) => {
  connection = conn;

  //const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;

};

/*const setupInput = function () {
  //const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};*/

const handleUserInput = function (key) {
  //For w
  
  if (key === 'w') {
    connection.write(`Move: up`);
  }
  //For a
  if (key === 'a') {
    //console.log("Move: left");
    connection.write(`Move: left`);
  }
  //For s
  if (key === 's') {
    //console.log("Move: down");
    connection.write(`Move: down`);
  }
  //For d
  if (key === 'd') {
    //console.log("Move: right");
    connection.write(`Move: right`);
  }

    // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  
  
};


//setupInput();

module.exports = {
  setupInput
};