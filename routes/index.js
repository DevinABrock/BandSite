const express = require('express');
const router = express.Router();

const dataFile = require('../data/data.json');

router.get('/', (req,res)=>{
    let albums = dataFile.albums
    res.render("index")
})




module.exports = router