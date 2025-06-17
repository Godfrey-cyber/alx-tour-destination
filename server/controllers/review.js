import Review from '../models/Reviews.js'
import Destination from '../models/Destination.js'

// Create a Review
export const addReview = async (req, res, next) => {
	try {
		const { rating, comment, destination } = req.body

		const savedReview = await Review.create({ rating, comment, user: req.userId, destination })

		// await savedReview.populate('user', 'name email')

		// pushing review in the destination
		await Destination.findByIdAndUpdate(destination, { $push: { reviews: savedReview._id } }, { new: true })
		res.status(201).json({
			success: true,
			savedReview,
			status: 201,
		})

		console.log(savedReview)
	} catch (error) {
		res.status(401).json({ success: false, error, status: 401 })
		console.log(error)
		next()
	}
}
// all reviews
export const reviews = async (req, res, next) => {
	try {
		const reviews = await Review.find()
		res.status(200).json({
			success: true,
			reviews,
			status: 201,
		})
	} catch (error) {
		res.status(401).json({ success: false, error, status: 401 })
		next()
	}
}
// Get Reviews by Destination
export const destinationReviews = async (req, res, next) => {
	try {
		const { id } = req.params
		const reviews = await Review.find({ destination: id }).populate('user', 'firstName email').sort({ date: -1 })
		res.status(200).json({
			success: true,
			reviews,
			status: 200,
		})
	} catch (error) {
		res.status(401).json({ success: false, error, status: 401 })
		next()
	}
}
