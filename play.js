//const connect = require('./client');
const {net, connect} = require("./client");


const handleUserInput = function (key) {
  // your code here
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
};

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // const handleUserInput = function (key) {
  //   // your code here
  //   // \u0003 maps to ctrl+c input
  //   if (key === '\u0003') {
  //     process.exit();
  //   }
  // };

  stdin.on("data", handleUserInput);
  
  return stdin;

};

setupInput();