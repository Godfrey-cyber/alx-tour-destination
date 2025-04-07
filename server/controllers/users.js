import User from '../models/Users.js'
import { mongoDbConnection } from '../utilities/utiles.js'

export const allUsers = async (req, res) => {
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
		return res.status(500).json({ status: 'Fail', msg: error.message })
	}
}
