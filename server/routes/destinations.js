import { addDestination, destinations, destination, editDestination } from '../controllers/destinations.js'
import { authenticate, restrictTo } from '../utilities/middleware.js'
import express from 'express'
const router = express.Router()

router.post('/add-destination', authenticate, addDestination)
router.get('/all-destinations', destinations)
router.get('/destination/:id', destination)
router.patch('/edit/:id', authenticate, restrictTo('host', 'admin'), editDestination)

export default router
