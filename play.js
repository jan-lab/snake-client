//const connect = require('./client');
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
//connect();

//setupInput();


const connection = connect();
setupInput(connection);