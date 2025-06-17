import Booking from '../models/Bookings.js'
import Counter from '../models/Counter.js'

function generatePin(length = 4) {
	const min = Math.pow(10, length - 1)
	const max = Math.pow(10, length) - 1
	return Math.floor(Math.random() * (max - min + 1) + min).toString()
}
//POST - add a new booking
export const addBooking = async (req, res, next) => {
	try {
		const { destination, adults, children, childrenAges, startDate, endDate, rooms, paymentStatus, totalPrice } =
			req.body
		if (
			!destination ||
			adults == null ||
			// children == null ||
			!Array.isArray(childrenAges) ||
			!startDate ||
			!endDate ||
			rooms == null ||
			// !paymentStatus ||
			totalPrice == null
		) {
			return res.status(400).json({ msg: '❌ Please provide all required booking fields.' })
		}
		const year = new Date().getFullYear()
		const counterId = `bookingNumber-${year}`

		// Atomically increment the counter for the current year
		const counter = await Counter.findByIdAndUpdate(
			{ _id: counterId },
			{ $inc: { seq: 1 } },
			{ new: true, upsert: true }
		)

		// Format booking number: e.g., BK-2025-000123
		const bookingNumber = `BK-${year}-${counter.seq.toString().padStart(6, '0')}`
		const pin = generatePin(4)

		const booking = new Booking({
			host: req.userId,
			destination,
			adults,
			children,
			childrenAges,
			startDate,
			endDate,
			rooms,
			paymentStatus,
			totalPrice,
			bookingNumber,
			pin,
		})
		const newBooking = await booking.save()
		res.status(201).json(newBooking)
		console.log(newBooking)
	} catch (error) {
		if (process.env.NODE_ENV === 'development') {
			console.error(error)
		}
		next(error)
	}
}
// GET my bookings
export const myBookings = async (req, res, next) => {
	try {
		const { page = 1, limit = 10 } = req.query
		const bookings = await Booking.find({ host: req.userId })
			.populate('destination', 'name location image') // Select relevant fields only
			.sort({ createdAt: -1 }) // Most recent first
			.skip((page - 1) * limit)
			.limit(Number(limit))
			.lean()
		const count = await Booking.countDocuments({ host: req.userId })
		// const bookings = await Booking.find({ host: req.userId }).populate('destination')
		// res.status(200).json({ count: bookings.length, bookings })
		res.status(200).json({ count, bookings, page: Number(page), limit: Number(limit) })
	} catch (error) {
		if (process.env.NODE_ENV === 'development') {
			console.error(error)
		}
		// Always send an error response to the client
		res.status(500).json({ msg: 'Failed to fetch bookings.' })
		next(error) // Optionally, retain this if you have a global error handler
	}
}
