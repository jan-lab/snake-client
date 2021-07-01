const net = require("net");

const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
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
    //conn.write('Name: ZZZ'); //this replaced the name COO when both COO and ZZZ were uncommented
  });

  //conn.on('connect', () => {
    //Send the string "Move: up" as data to the server via the conn object.
    
    //// Case.1
    //conn.write('Move: up');

    //// Case.2
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 1000);
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 2000);
    // setTimeout(() => {
    //   conn.write('Move: left');
    // }, 3000);
    // setTimeout(() => {
    //   conn.write('Move: left');
    // }, 3000);

    // // Case.3
    // let delay = 0;
    // for (let i = 0; i < 20; i++) {
    //   setTimeout(() => {
    //     conn.write('Move: up');
    //   }, delay);
    //   delay += 50;
    // }
    
    // // Case.4 setInterval
    // //repeat with the interval of 50ms
    // const timerId = setInterval(() => {
    //   conn.write('Move: up');
    // }, 50);
    // // after 10 seconds stop
    // setTimeout(() => {
    //   clearInterval(timerId);
    // }, 10000);
  //});
  
  return conn;
};

//module.exports = connect;
module.exports = {
  connect
};