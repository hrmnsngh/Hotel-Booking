const app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function (req, res) {
    res.sendFile('C:/Users/harman.d.singh/Documents/test/Messagging-App/index.html');
});

//Whenever someone connects this gets executed
clientNo = 0;
users = [];
io.on('connection', function (socket) {
    clientNo++;
    console.log(users)
    console.log('A client is connected, total clients : ' + clientNo);
    socket.on('setUsername', function (data) {
        console.log(data);
        console.log(users.indexOf(data));
        if (users.indexOf(data) == -1) {
            console.log('Pushing username in Database');
            users.push(data);
            console.log(users);
            socket.emit('userSet', { username: data });
        } else {
            console.log('Username already exists');
            socket.emit('userExists', '"' + data + '"' + ' username already exits. Try some other username');
        }
    });

    socket.on('msg', function (data) {
        io.sockets.emit('newMsg', data);
    });

    /* clientNo++;
     socket.emit('newclientconnect',{ description: 'Hey, welcome!'});
     socket.broadcast.emit('newClientConnect',{ description: clientNo +' clients conneced'})
     console.log('A new client is connected , total clients : ' + clientNo);
    /* socket.on('clientEvent', function(data){
         console.log(data);
     });*/

    /*setTimeout(function(){
       socket.emit('message', { description :' 4 sec delay in msg after connection'})
      }, 4000);*/

    //Whenever someone disconnects this gets executed
    socket.on('disconnect', function () {
        clientNo--;
        console.log('A client is disconnected, total clients : ' + clientNo);
        console.log(users);
        /* clientNo--;
         socket.broadcast.emit('newClientConnect',{ description: clientNo + ' clients connected!'});
         console.log('A client is disconnected, total clients : ' + clientNo);*/
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});