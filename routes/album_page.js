const express = require('express');
const router = express.Router();

const dataFile = require('../data/data.json');

let album = dataFile.albums

router.get('/album_page', (req,res)=>{
    // let albums = dataFile.albums
    let coverArt = []
    album.forEach(albumObj =>{
        pagePhotos = pagePhotos.concat(albumObj.artwork)
    })
    res.render('album_page', {
        artwork: pagePhotos,
        

    })
    // res.render("album_page")
})




module.exports = router