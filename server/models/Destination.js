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
	images: [String], // Array of image URLs
	pricePerNight: {
		type: Number,
		required: true,
	},
	maxGuests: {
		type: Number,
		required: true,
	},
	amenities: [String], // e.g. ['WiFi', 'Parking', 'Pool']
	category: {
		type: String,
		enum: ['Beach', 'Mountain', 'City', 'Countryside', 'Desert', 'Historic', 'Luxury', 'Generic'],
		default: 'Generic',
	},
	host: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	reviews: [
		{
			user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
			rating: { type: Number, min: 1, max: 5 },
			comment: String,
			createdAt: { type: Date, default: Date.now },
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
	'location.city': 'text',
	'location.country': 'text',
})
export default mongoose.model('Destination', destinationSchema)
