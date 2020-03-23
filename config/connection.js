// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "qbhol6k6vexd5qjs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "fpg5fc58z7nlfp04",
    password: "l1353qgsxvhyg4d7",
    database: "br0niwsc7mmtevm5"
  });
  
  // Make connection.
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;
  