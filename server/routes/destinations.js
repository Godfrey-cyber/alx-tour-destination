import {
	addDestination,
	destinations,
	destination,
	editDestination,
	myDestinations,
	cityDestinations,
} from '../controllers/destinations.js'
import { authenticate, restrictTo } from '../utilities/middleware.js'
// import { apiLimiter } from "../middleware/rateLimiter.js";
import express from 'express'
const router = express.Router()

router.post('/add-destination', authenticate, addDestination)
router.get('/all-destinations', destinations)
router.get('/city-destinations/:cityName', cityDestinations)
router.get('/destination/:id', destination)
router.patch('/edit/:id', authenticate, restrictTo('host', 'admin'), editDestination)
router.get('/my-destinations', authenticate, restrictTo('host', 'admin'), myDestinations)

export default router
