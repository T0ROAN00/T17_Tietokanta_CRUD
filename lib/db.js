var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'antti',
	password:'EliasN11l0',
	database:'t0roan00'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;