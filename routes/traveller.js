const router = require('express').Router()
const { Traveller } = require('../models')

// get all travellers
router.get('/', async (req, res) => {
    try {
      const allTravellers = await Traveller.findAll()
      res.json(allTravellers)
    } catch (err) {
      res.status(500).json(err)
    }
});

// get one traveller
router.get('/:id', async (req, res) => {
    try {
      const singleTraveller = await Traveller.findOne({
        where: {
          id: req.params.id
        }
      })
      res.json(singleTraveller)
    } catch (err) {
      res.status(500).json(err)
    }
});

// create a new traveller
router.post('/', async (req, res) => {
    try {
      const newTraveller = await Traveller.create(req.body)
      res.json(newTraveller)
    } catch (err) {
      res.status(500).json(err)
    }
});

// delete on traveller by its `id` value
router.delete('/:id', async (req, res) => {
    try {
      const deletedTraveller = await Traveller.destroy({
        where: {
          id: req.params.id
        }
      })
      res.json(deletedTraveller)
    } catch (err) {
      res.status(500).json(err)
    }
});

module.exports = router