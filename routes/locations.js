const router = require('express').Router()
const { Location } = require('../models')

// get all locations
router.get('/', async (req, res) => {
    try {
      const allLocations = await Location.findAll()
      res.json(allLocations)
    } catch (err) {
      res.status(500).json(err)
    }
});

// get one location
router.get('/:id', async (req, res) => {
    try {
      const singleLocation = await Location.findOne({
        where: {
          id: req.params.id
        }
      })
      res.json(singleLocation)
    } catch (err) {
      res.status(500).json(err)
    }
});

// create a new location
router.post('/', async (req, res) => {
    try {
      const newLocation = await Location.create(req.body)
      res.json(newLocation)
    } catch (err) {
      res.status(500).json(err)
    }
});

// delete on location by its `id` value
router.delete('/:id', async (req, res) => {
    try {
      const deletedLocation = await Location.destroy({
        where: {
          id: req.params.id
        }
      })
      res.json(deletedLocation)
    } catch (err) {
      res.status(500).json(err)
    }
});

module.exports = router