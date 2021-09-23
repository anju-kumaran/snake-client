const net = require("net");

//const stdin = process.stdin;

const connect = () => {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  
// interpret incoming data as text
conn.setEncoding("utf8");

  conn.on('connect', () => {

    console.log("CONNECTED to the server ...");
    conn.write('Hello from client!');
    //conn.write(`Name: ANK`);
    conn.write(`Say: hi this is a test by ank`);

    // setInterval(() => {
    //   conn.write(`Move: up`);
    // }, 1000);

    // setInterval(() => {
    //   conn.write(`Move: left`);
    // }, 2500);

    // setInterval(() => {
    //   conn.write(`Move: down`);
    // }, 3000);
       
    // setInterval(() => {
    //   conn.write(`Move: right`);
    // }, 4000);


    /*setTimeout(() => {
      conn.write(`Move: up`);
    }, 1000);

    setTimeout(() => {
      conn.write(`Move: up`);
    }, 2000);

    setTimeout(() => {
      conn.write(`Move: up`);
    }, 2500);

    setTimeout(() => {
      conn.write(`Move: up`);
    }, 3000);

    setTimeout(() => {
      conn.write(`Move: up`);
    }, 4000);

    setTimeout(() => {
      conn.write(`Move: left`);
    }, 4500);

    setTimeout(() => {
      conn.write(`Move: left`);
    }, 5000);

    setTimeout(() => {
      conn.write(`Move: left`);
    }, 5500);

    setTimeout(() => {
      conn.write(`Move: left`);
    }, 4000);

    setTimeout(() => {
      conn.write(`Move: down`);
    }, 4500);

    setTimeout(() => {
      conn.write(`Move: down`);
    }, 6000);

    setTimeout(() => {
      conn.write(`Move: down`);
    }, 6500);

    setTimeout(() => {
      conn.write(`Move: right`);
    }, 7500);

    setTimeout(() => {
      conn.write(`Move: right`);
    }, 8000);

    setTimeout(() => {
      conn.write(`Move: right`);
    }, 8500);*/
    
  });
  

  conn.on('data', (data) => {
      console.log("DATA CAME IN!!!!!");
      console.log(data);
  })

  return conn;

};
console.log("Connecting ...");
//connect();

module.exports = {
  connect
};