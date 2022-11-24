const router = require('express').Router()
const movieRoutes = require('./locations')
const reviewRoutes = require('./traveller')
const userRoutes = require('./trips')


router.use('/api/location', movieRoutes)
router.use('/api/traveller', reviewRoutes)
router.use('/api/trips', userRoutes)


module.exports = router