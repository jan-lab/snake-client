const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133', // IP address here,
    port: 50542 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Update the connect function to handle incoming data and console.log it for the player.
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  //The "connect" event is triggered on a connection as soon as it is successfully established.
  //Print a message to the screen for us (the player) when the connection is successfully established.
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    //Send the string "Name: ___" to the server, upon connection
    conn.write('Name: COO');
  });


  return conn;
};

console.log("Connecting ...");
connect();

//module.exports = connect;
module.exports = {
  net,
  connect
};