import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'

//Create Access Token
export const createAccessToken = (userId) => {
	return jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: '15m',
	})
}

//Create Refresh Token
export const createRefreshToken = (userId) => {
	return jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
		expiresIn: '7d',
	})
}

// Validate email
export const validateEmail = (email) => {
	let emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

	if (!emailFormat.test(email)) {
		throw new Error('❌ Please enter a valid email address❗')
	}
}

// Validate password
export const validatePassword = (password) => {
	let passValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/

	if (!passValid.test(password)) {
		throw new Error(
			'🚫 Password must be between 8 to 15 characters containing at least one lowercase letter, one uppercase letter, one numeric digit, and one special character'
		)
	}
}

export const mongoDbConnection = (res) => {
	if (mongoose.connection.readyState !== 1) {
		return res.status(500).json({ status: 'Fail', msg: 'Database not connected' })
	}
}

export const allowedUpdates = (destination, requestObject, allowedfields) => {
	for(const key of allowedfields) {
		if (requestObject[key] !== undefined) {
			destination[key] = requestObject[key]
		}
	}
}

// export const sendEmail = async (to, subject, text) => {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   })

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to,
//     subject,
//     text,
//   }

//   return transporter.sendMail(mailOptions)
// }
// export const login = async (req, res) => {
//   try {
//     const { email, password, device } = req.body
//     if (!email || !password) {
//       return res.status(400).json({ msg: '❌ Please fill in all fields' })
//     }

//     const user = await User.findOne({ email }).select('+password')
//     if (!user) {
//       return res.status(400).json({ msg: '🚫 This email does not exist!' })
//     }

//     const isPasswordCorrect = await bcrypt.compare(password, user.password)
//     if (!isPasswordCorrect) {
//       return res.status(400).json({ msg: '🚫 Invalid email or password.' })
//     }

//     // Limit to 3 active devices
//     if (user.refreshTokens.length >= 3) {
//       return res.status(400).json({ msg: '🚫 Max active devices reached. Please log out from other devices.' })
//     }

//     const accessToken = createAccessToken(user._id, user.role)
//     const refreshToken = createRefreshToken(user._id)

//     user.refreshTokens.push({ token: refreshToken, device: device || 'Unknown' })
//     await user.save()

//     res.cookie('refreshToken', refreshToken, {
//       httpOnly: true,
//       maxAge: 7 * 24 * 60 * 60 * 1000,
//       sameSite: 'Strict',
//       secure: process.env.NODE_ENV === 'production',
//     })

//     res.status(200).json({ accessToken, msg: '🎉 Login successful!' })
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ message: error.message })
//   }
// }
