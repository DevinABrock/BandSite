const express = require('express');
const app = express();
const socket = require('socket.io');
let port = 4000;

app.set('view engine', 'ejs')

app.get('/chat', (req,res)=>{
    res.render('chat')
})


let server = app.listen(port, ()=>{
    console.log(`Chat on port ${port}`);
})

let io = socket(server)

io.on('connection', (socket)=>{
    socket.on('msgFromClient', (clientMsg)=>{
        io.emit('msgFromServer', clientMsg)
    })
})


module.exports = app;