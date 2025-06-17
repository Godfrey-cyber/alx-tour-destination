import mongoose from 'mongoose'

const destinationSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	slug: {
		// SEO-friendly URL
		type: String,
		unique: true,
		lowercase: true,
	},
	description: {
		type: String,
		required: true,
	},
	location: {
		country: String,
		city: String,
		address: String,
		coordinates: {
			type: [Number], // [longitude, latitude]
			index: '2dsphere',
		},
	},
	images: [String],
	pricePerNight: {
		type: Number,
		required: true,
	},
	maxGuests: {
		type: Number,
		required: true,
	},
	amenities: [String],
	category: {
		type: String,
		// enum: ['Beach', 'Eco', 'Mountain', 'City', 'Countryside', 'Desert', 'Historic', 'Luxury', 'Cultural'],
		default: 'Generic',
	},
	host: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	reviews: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Review',
		},
	],
	averageRating: {
		type: Number,
		default: 0,
	},
	numReviews: {
		type: Number,
		default: 0,
	},
	availableDates: [Date], // Optional: For fixed tour dates
	isAvailable: {
		type: Boolean,
		default: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
})
destinationSchema.index({
	title: 'text',
	description: 'text',
	amenities: 'text',
	category: 'text',
	'location.city': 'text',
	'location.country': 'text',
})
export default mongoose.model('Destination', destinationSchema)
