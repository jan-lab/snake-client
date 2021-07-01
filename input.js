// Stores the active TCP connection object.
let connection;

const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  //Add logic to the input.js file to console.log the movement command to your screen if one of these keys is pressed.
  if (key === 'w') {
    //console.log('Move: up');
    connection.write('Move: up');
  }
  if (key === 'a') {
    //console.log('Move: left');
    connection.write('Move: left');
  } 
  if (key === 's') {
    //console.log('Move: down');
    connection.write('Move: down');
  } 
  if (key === 'd') {
    //console.log('Move: right');
    connection.write('Move: right');
  }
  if (key === 'f') {
    connection.write('Say: FUN');
  }
};

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput
};