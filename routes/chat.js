const express = require('express');
const app = express();
const socket = require('socket.io');
let port = 4000;

app.set('view engine', 'ejs')

app.get('/chat', (req,res)=>{
    res.render('chat')
})


let server = app.listen(port, ()=>{
    console.log(`on port ${port}`);
})

let io = socket(server)

// listen for messages coming from client
io.on('connection', (socket)=>{
    socket.on('msgFromClient', (clientMsg)=>{ // listens for incoming messages
        io.emit('msgFromServer', clientMsg) //broadcast back out to all of clients
    })
})


module.exports = app;