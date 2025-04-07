// Add a destination
import Destination from '../models/Destination.js'
import slugify from 'slugify'

export const addDestination = async (req, res, next) => {
	try {
		const { title, description, location, images, pricePerNight, maxGuests, amenities, category, availableDates } =
			req.body

		// Basic validation
		if (
			!title ||
			!description ||
			!pricePerNight ||
			!maxGuests ||
			!location ||
			!location.country ||
			!location.city
		) {
			return res.status(400).json({ message: '❌ Required fields are missing.' })
		}

		const slug = slugify(title, { lower: true })

		// Check for duplicate slug
		const existingDestination = await Destination.findOne({ slug })
		if (existingDestination) {
			return res.status(409).json({ message: '🚫 A destination with this title already exists.' })
		}

		// Create the destination
		const newDestination = new Destination({
			title,
			slug,
			description,
			location,
			images,
			pricePerNight,
			maxGuests,
			amenities,
			category,
			host: req.userId, // assuming req.userId is set by auth middleware
			availableDates,
		})

		await newDestination.save()
		console.log(req.user)
		res.status(201).json({
			message: '✅ Destination created successfully!',
			destination: newDestination,
		})
	} catch (error) {
		console.error('Error adding destination:', error)
		next()
	}
}

export const destinations = async (req, res, next) => {
	try {
		const destinations = await Destination.find().populate('host', 'name email')
		res.status(200).json({
			success: true,
			count: destinations.length,
			data: destinations,
		})
	} catch (error) {
		console.log(error)
		next()
	}
}

export const editDestination = async (req, res, next) => {
	try {
		const { id } = req.params
		const destination = await Destination.findById(id)

		if (!destination) {
			return res.status(404).json({ success: false, message: 'Destination not found.' })
		}

		const allowedFields = [
			'title',
			'description',
			'pricePerNight',
			'maxGuests',
			'category',
			'location',
			'isAvailable',
			'availableDates',
			'images',
		]

		for (const key of allowedFields) {
			if (req.body[key] !== undefined) {
				destination[key] = req.body[key]
			}
		}
		const updated = await destination.save()
		res.status(200).json({
			success: true,
			message: '✅ Destination updated successfully!',
			data: updated,
		})
	} catch (error) {
		console.log(error)
		next()
	}
}
