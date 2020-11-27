const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/User')
const Track = require('../models/Track')
const jwt = require('jsonwebtoken')
const requireAuth = require('../middlewares/requireAuth')


const router = express.Router()

router.use(requireAuth)

router.get('/tracks', async (req, res) => {
    id = req.user._id
    const tracks = await Track.find({userId: id})

    res.send(tracks)
})

router.post('/tracks', async(req, res) => {
    const { name, locations  } = req.body

    if(!name || !locations) return res.status(422).send({error: 'you must provide name an location'})

    try {
        const track = new Track ({name, locations, userId: req.user._id})
        await track.save()
        res.send(track)
    } catch (error) {
        res.status(422).send({error: error.message})
    }
})


module.exports = router