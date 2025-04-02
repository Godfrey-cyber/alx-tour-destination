import User from '../models/Users.js'

export const allUsers = async (req, res) => {
  console.log(req.query.username)
  try {
    const users = req.query.new
      ? await User.find().sort({ createdAt: -1 }).limit(5).select('-password')
      : await User.find().select('-password')
    return res
      .status(200)
      .json({ users, status: 'Success', count: users.length })
  } catch (error) {
    return res.status(500).json({ status: 'Fail', msg: error.message })
  }
}
