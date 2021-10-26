const express = require('express');
const socket = require('socket.io');
const app = express();
const port = 3000;
// const port = process.env.PORT || 3000;

// Static Assets
app.use(express.static('public'))

app.set('view engine', 'ejs')

// Routes
app.use(require('./routes/index'))
app.use(require('./routes/albums'))
app.use(require('./routes/chat'))
app.use(require('./routes/album_page'))



app.listen(port, () =>{
    console.log(`Site on port ${port}`);
})