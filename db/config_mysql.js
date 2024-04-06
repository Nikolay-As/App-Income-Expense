const mysql = require("mysql2");

const config = {
    host: "localhost",
    port: 3306,
    database: "Income_Expense",
    user: "root",
    password: "password"

}
const connection = mysql.createConnection(config);

module.exports = connection;

// connection.connect(function(err){
//     if(err){
//         console.log("error occurred while connecting");
//         console.log(err.sqlMessage);
//     }else{
//         console.log("connection created with Mysql successfully");
//     }
// })