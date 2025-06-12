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
			availableDates
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
    // Destructure and set defaults for query parameters
    const {
      search,
      page = 1,
      limit = 10,
      sortBy = "createdAt",
      order = "desc",
      minPrice,
      maxPrice,
      minRating,
      maxRating,
      amenities,
    } = req.query;

    const pipeline = [];

    // Search filter
    if (search) {
      const regex = new RegExp(search, 'i');
      pipeline.push({
        $match: {
          $or: [
            { title: regex },
            { description: regex },
            { category: regex },
            { amenities: regex },
            { "location.city": regex },
            { "location.country": regex },
          ],
        },
      });
    }

    // Price range filter
    if (minPrice || maxPrice) {
      pipeline.push({
        $match: {
          pricePerNight: {
            ...(minPrice ? { $gte: Number(minPrice) } : {}),
            ...(maxPrice ? { $lte: Number(maxPrice) } : {}),
          },
        },
      });
    }

    // Rating range filter
    if (minRating || maxRating) {
      pipeline.push({
        $match: {
          averageRating: {
            ...(minRating ? { $gte: Number(minRating) } : {}),
            ...(maxRating ? { $lte: Number(maxRating) } : {}),
          },
        },
      });
    }

    // Amenities filter (at least one matches)
    if (amenities) {
      const amenitiesArray = amenities.split(',').map(item => item.trim());
      pipeline.push({
        $match: {
          amenities: { $in: amenitiesArray },
        },
      });
    }

    // Sorting
    const sortOrder = order === "asc" ? 1 : -1;
    pipeline.push({ $sort: { [sortBy]: sortOrder } });

    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);
    pipeline.push({ $skip: skip });
    pipeline.push({ $limit: parseInt(limit) });

    // Project only necessary fields
    pipeline.push({
      $project: {
        title: 1,
        description: 1,
        category: 1,
        amenities: 1,
        location: 1,
        pricePerNight: 1,
        averageRating: 1,
        host: 1,
        createdAt: 1,
        images: 1,
        slug: 1,
      },
    });

    // Run aggregation
    const destinations = await Destination.aggregate(pipeline);

    // For total count (remove skip/limit stages)
    const countPipeline = pipeline.filter(
      (stage) => !("$skip" in stage) && !("$limit" in stage)
    );
    countPipeline.push({ $count: "total" });
    const countResult = await Destination.aggregate(countPipeline);
    const total = countResult[0]?.total || 0;

    // Response
    res.status(200).json({
      success: true,
      count: destinations.length,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit),
      destinations,
    });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }
    next(error);
  }
};
// my destinations
export const myDestinations = async (req, res, next) => {
	try {
		const destinations = await Destination.find({ host: req.userId }).populate('host', 'firstName email').sort({ createdAt: -1 })
		res.status(200).json({
			success: true,
			count: destinations.length,
			destinations,
		})
	} catch (error) {
		console.log(error)
		next()
	}
}

export const destination = async (req, res, next) => {
	try {
		const { id } = req.params
		const result = await Destination.findById(id).populate('host', 'firstName email')
		if (!result) {
			return res.status(404).json({ success: false, message: 'Sorry! No destination found.' })
		}
		res.status(200).json({
			success: true,
			result,
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




