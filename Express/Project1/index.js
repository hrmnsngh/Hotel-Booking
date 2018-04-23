var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Welcome!");
});

app.get('/getAllUsers', function(req, res) {
    res.sendFile('C:/Users/harman.d.singh/Documents/test/Express/Project1/users.json');
});

app.post('/getAllusers', function(req, res) {
    res.send("U just called post method at '/getAllUsers'\n");

});
app.listen(3000);