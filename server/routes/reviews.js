import { addReview, reviews, destinationReviews } from '../controllers/review.js'
import { authenticate, restrictTo } from '../utilities/middleware.js'
import express from 'express'
const router = express.Router()

router.post('/add-review', authenticate, restrictTo('host', 'admin'), addReview)
router.get('/get-reviews', authenticate, restrictTo('host', 'admin'), reviews)
router.get('/destination-reviews/:id', authenticate, restrictTo('host', 'admin'), destinationReviews)

export default router
