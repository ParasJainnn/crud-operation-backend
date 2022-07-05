var mysql= require("mysql");
const connection =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Paras@08",
    database:"crudoperation"
})

connection.connect(function(err){
    if(err) throw err;
    console.log("database connected");
})
module.exports=connection;