const router = require('express').Router()
const { Trip } = require('../models')

// get all trips
router.get('/', async (req, res) => {
    try {
      const allTrips = await Trip.findAll()
      res.json(allTrips)
    } catch (err) {
      res.status(500).json(err)
    }
});

// get one trip
router.get('/:id', async (req, res) => {
    try {
      const singleTrip = await Trip.findOne({
        where: {
          id: req.params.id
        }
      })
      res.json(singleTrip)
    } catch (err) {
      res.status(500).json(err)
    }
});

// create a new trip
router.post('/', async (req, res) => {
    try {
      const newTrip = await Trip.create(req.body)
      res.json(newTrip)
    } catch (err) {
      res.status(500).json(err)
    }
});

// delete on trip by its `id` value
router.delete('/:id', async (req, res) => {
    try {
      const deletedTrip = await Trip.destroy({
        where: {
          id: req.params.id
        }
      })
      res.json(deletedTrip)
    } catch (err) {
      res.status(500).json(err)
    }
});

module.exports = router