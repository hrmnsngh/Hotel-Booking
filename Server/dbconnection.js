mySql = require('mysql');
var connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'chirpchat'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Database connected');
    }
});
module.exports= connection;