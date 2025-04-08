import User from '../models/Users.js'
import { mongoDbConnection } from '../utilities/utiles.js'

export const allUsers = async (req, res, next) => {
	console.log(req.query.firstName || req.query.lastName)
	try {
		await mongoDbConnection()
		const filter = {}

		if (req.query.firstName) filter.firstName = new RegExp(req.query.firstName, 'i')
		if (req.query.lastName) filter.lastName = new RegExp(req.query.lastName, 'i')
		// if (req.query.new) filter.lastName = new RegExp(req.query.lastName, 'i')

		const users = await User.find(filter).select('-password')
		return res.status(200).json({ users, status: 'Success', count: users.length })
	} catch (error) {
		console.log(error)
		next()
	}
}

//GET - Logged in user
export const loggedInUser = async (req, res, next) => {
	try {
		const user = await User.findById(req.userId).select('-password')
		if(!user) {
			return res.status(400).json({ msg: "No user found" })
		}
		res.status(200).json({ msg: "User retrieved successfully", user })
	} catch(error) {
		console.log(process.NODE_ENV === 'development' ? error : undefined)
		next()
	}
}