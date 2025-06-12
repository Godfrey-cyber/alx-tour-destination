import { addDestination, destinations, destination, editDestination, myDestinations } from '../controllers/destinations.js'
import { authenticate, restrictTo } from '../utilities/middleware.js'
import { apiLimiter } from "../middleware/rateLimiter.js";
import express from 'express'
const router = express.Router()

router.post('/add-destination', rateLimiter, authenticate, addDestination)
router.get('/all-destinations', rateLimiter, destinations)
router.get('/destination/:id', rateLimiter, destination)
router.patch('/edit/:id', rateLimiter, authenticate, restrictTo('host', 'admin'), editDestination)
router.get('/my-destinations', rateLimiter, authenticate, restrictTo('host', 'admin'), myDestinations)

export default router
