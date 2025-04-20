import Booking from '../models/Bookings.js'

//POST - add a new booking
export const addBooking = async (req, res, next) => {
	try {
		const { destination, adults, children, childrenAges, startDate, endDate, rooms, paymentStatus, totalPrice } =
			req.body
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
		})
		const newBooking = await booking.save()
		res.status(201).json(newBooking)
	} catch (error) {
		console.log(process.NODE_ENV === 'development' ? error : undefined)
		console.log(error)
		next()
	}
}
// GET my bookings
export const myBookings = async (req, res, next) => {
	try {
		const bookings = await Booking.find({ host: req.userId }).populate('destination')
		res.status(200).json({ count: bookings.length, bookings })
	} catch (error) {
		console.log(error)
		next()
	}
}
