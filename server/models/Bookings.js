import mongoose from 'mongoose'
const bookingSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	destination: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Destination',
		required: true,
	},
	checkIn: Date,
	checkOut: Date,
	guests: Number,
	totalPrice: Number,
	paymentStatus: {
		type: String,
		enum: ['pending', 'paid', 'failed'],
		default: 'pending',
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
})

export default mongoose.model('Booking', bookingSchema)
