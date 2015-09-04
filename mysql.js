//npm instal --save mysql
var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'cmsc100ef0l',
   password: 'cmsc100ef0l',
   database: 'cmsc100ef0l'
   }); //para pwedeng ma-something
   
   connection.connect(function(err, conn) {
    if(err) {
         console.log('MySQL connection error: ', err);
         process.exit(1);
    }

});

module.exports = connection;