import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema({
	host: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	destination: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Destination',
		required: true,
	},
	startDate: Date,
	endDate: Date,
	guests: Number,
	children: Number,
	childrenAges: [String],
	totalPrice: Number,
	paymentStatus: {
		type: String,
		enum: ['pending', 'paid', 'failed'],
		default: 'pending',
	},
	bookingNumber: { type: String, required: true, unique: true },
	pin: { type: String, required: true },
	createdAt: {
		type: Date,
		default: Date.now,
	},
})

export default mongoose.model('Booking', bookingSchema)
