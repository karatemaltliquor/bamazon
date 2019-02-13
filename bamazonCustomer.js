// add requirements
var mysql = require("mysql");
var inquirer = require("inquirer");

//  info for mysql connection
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "yourRootPassword",
    database: "bamazon"
  });

  // connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
    function start(){
        connection.query(
          "SELECT * FROM products",
          function(err, res) { if (err) throw err;
          // console.log(results);
          for (var i = 0; i < res.length; i++) {
                var products4sale = {
                  id: (res[i].id),
                  product_name: (res[i].product_name),
                  price: (res[i].price),
                  quantity: (res[i].stock_quantity)
                };
                console.log(products4sale.id + " || " + products4sale.product_name + " || " + products4sale.price );   
          };
          }     
        )};   
  });
  
 
  
