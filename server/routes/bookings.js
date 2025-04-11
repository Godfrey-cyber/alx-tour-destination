import { addBooking, myBookings } from '../controllers/bookings.js'
import { authenticate, restrictTo } from '../utilities/middleware.js'
import express from 'express'
const router = express.Router()

router.post('/addBooking', authenticate, addBooking)
router.get('/my-bookings', authenticate, restrictTo('host', 'admin'), myBookings)

export default router
