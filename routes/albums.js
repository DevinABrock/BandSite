const express = require('express');
const router = express.Router();
const dataFile = require('../data/data.json');

let albums = dataFile.albums

// Album List
router.get('/albums', (req,res)=>{
    let pagePhotos = []
    let names = []
    let description = []
    let tracklist = []
    let releaseDate = []
    let length = []
    let shortname = []
    albums.forEach(albumObj =>{
        pagePhotos = pagePhotos.concat(albumObj.artwork)
        names = names.concat(albumObj.albumTitle)
        description = description.concat(albumObj.description)
        tracklist = tracklist.concat(albumObj.tracklist)
        releaseDate = releaseDate.concat(albumObj.releaseDate)
        length = length.concat(albumObj.length)
        shortname = shortname.concat(albumObj.shortname)
    })
    res.render('albums', {
        artwork: pagePhotos,
        albumTitle: names,
        description: description,
        tracklist: tracklist,
        releaseDate: releaseDate,
        length: length,
        albums: albums,
        shortname: shortname
    })
})

// Chosen Album
router.get( 'albums/:albumid', (req,res)=>{
    let albumPick = req.params.albumid;
    let pagePhotos = []
    let names = []
    let description = []
    let tracklist = []
    let releaseDate = []
    let length = []
    let shortname = []
    let empty = []

    albums.forEach(albumObj =>{
        if(albumObj.shortname === albumPick){
            pagePhotos = [...albumObj.artwork]
            empty.push(albumObj)
        }
    })
    res.render('albums', {
        artwork: pagePhotos,
        albumTitle: names,
        description: description,
        tracklist: tracklist,
        releaseDate: releaseDate,
        length: length,
        albums: albums,
        shortname: shortname,
        pageTitle: `Tame Impala - ${albums.albumTitle}`
    })
})



module.exports = router