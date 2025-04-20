import bcrypt from 'bcryptjs'
import User from '../models/Users.js'
import jwt from 'jsonwebtoken'

import { createRefreshToken, createAccessToken, validateEmail, validatePassword } from '../utilities/utiles.js'

export const register = async (req, res, next) => {
	try {
		const { firstName, lastName, password, email } = req.body

		if (!email || !password || !firstName || !lastName) {
			return res.status(400).json({ msg: '❌ Please enter all fields' })
		}

		// Validate email format
		try {
			validateEmail(email) // checks if the email contains an @
		} catch (error) {
			return res.status(400).json({ msg: error.message })
		}

		// Validate password format
		try {
			validatePassword(password) // checks if the password meets the required criteria
		} catch (error) {
			return res.status(400).json({ msg: error.message })
		}

		// check if user exists
		const user = await User.findOne({ email })
		if (user) {
			return res.status(400).json({ msg: '🚫 This email already exists!' })
		}

		// create a user
		const newUser = new User({ firstName, lastName, password, email })
		await newUser.save()
		return res.status(201).json({ msg: 'User Registration successfull🥇' })
	} catch (error) {
		console.log(error)
		next(error)
	}
}

export const login = async (req, res, next) => {
	try {
		const { password, email } = req.body
		if (!email || !password) {
			return res.status(400).json({ msg: '❌ Please fill in all fields' })
		}

		// Validate email & password format
		try {
			validateEmail(email)
			validatePassword(password)
		} catch (error) {
			return res.status(400).json({ msg: error.message })
		}

		// check if user exists
		// const user = await User.findOne({ email })
		const user = await User.findOne({ email }).select('+password')
		if (!user) {
			return res.status(400).json({ msg: '🚫 This email does not exist!' })
		}

		const ifPasswordIsCorrect = await bcrypt.compare(password, user.password)
		if (!ifPasswordIsCorrect) {
			return res.status(400).json({ msg: '🚫 Invalid email or password.' })
		}

		// Generate tokens
		const accessToken = createAccessToken(user._id)
		const refreshToken = createRefreshToken(user._id)

		user.refreshTokens.push(refreshToken)
		await user.save()

		// console.log(userData)
		// Send refresh token to the front-end
		res.cookie('refreshToken', refreshToken, {
			path: '/',
			httpOnly: true,
			maxAge: 86400000,
			sameSite: 'Strict',
			secure: process.env.NODE_ENV === 'production',
		})
		res.status(200).json({ accessToken, user })
	} catch (error) {
		console.log(error.message)
		console.log(error)
		next(error)
	}
}

// logout user
export const logout = async (req, res, next) => {
	try {
		const refreshToken = req.cookies.refreshToken
		if (!refreshToken) return res.status(400).json({ msg: '🚫 No refresh token provided' })

		// Find user and remove refresh token
		const user = await User.findOneAndUpdate(
			{ refreshTokens: refreshToken },
			{ $pull: { refreshTokens: refreshToken } },
			{ new: true }
		)

		if (!user) return res.status(400).json({ msg: '🚫 Invalid refresh token' })

		res.clearCookie('refreshToken', { path: '/' })
		res.status(200).json({ msg: '✅ Logged out successfully' })
	} catch (error) {
		console.error(error)
		next(error)
	}
}

// Change Password
export const changePassword = async (req, res, next) => {
	try {
		const { previousPassword, password } = req.body
		// Validate user fields
		if (!previousPassword || !password) return res.status(400).json({ message: '❌ Please enter all fields.' })
		// Validate password format
		try {
			validatePassword(password)
		} catch (error) {
			return res.status(400).json({ msg: error.message })
		}
		// Fetch user from the database
		// const userId = new mongoose.Types.ObjectId(req.userId)
		const user = await User.findById(req.userId)
		console.log(req.userId)
		console.log('before', user)
		if (!user) {
			return res.status(401).json({ message: '❌ User not found. Please log in again.' })
		}
		console.log('After', user)

		// Check if the previous password matches the user's current password
		const isPasswordMatch = await bcrypt.compare(previousPassword, user.password)
		console.log('user', user)
		console.log('is password match', isPasswordMatch)

		if (!isPasswordMatch) {
			return res.status(400).json({
				message: '🚫 Passwords did not match, please try again❗',
			})
		}

		// Update and save the new password
		user.password = password
		await user.save()

		res.status(200).json({
			message: '✅ Password has been changed successfully!',
		})
	} catch (error) {
		next()
		console.log(error)
	}
}

// Refresh Access Token
export const refreshAccessToken = async (req, res, next) => {
	try {
		const refreshToken = req.cookies.refreshToken

		if (!refreshToken) {
			return res.status(401).json({ msg: '🚫 No refresh token provided' })
		}

		// Verify refresh token
		jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, decoded) => {
			if (err) {
				return res.status(403).json({ msg: '🚫 Invalid refresh token' })
			}

			// Check if user exists
			const user = await User.findById(decoded.userId).select('-password')
			if (!user || !user.refreshTokens.includes(refreshToken)) {
				return res.status(403).json({ msg: '🚫 User not found' })
			}

			// Generate new access token
			const accessToken = createAccessToken(user._id)

			res.status(200).json({ accessToken, user })
		})
	} catch (error) {
		console.error(error)
		next(error)
	}
}

// test code

// import { Customer } from '../models/Customer.js';
// import {
//   GenerateOtp,
//   GeneratePassword,
//   GenerateSalt,
//   GenerateSignature,
//   onRequestOTP
// } from '../utility/index.js';

// // Helper to validate required fields
// const validateRequired = (fields, body) => {
//   const missing = fields.filter((field) => !body[field]);
//   return missing.length ? `Missing fields: ${missing.join(', ')}` : null;
// };

// export const CustomerSignUp = async (req, res, next) => {
//   try {
//     const { email, phone, password } = req.body;

//     const missing = validateRequired(['email', 'phone', 'password'], req.body);
//     if (missing) return res.status(400).json({ message: missing });

//     const existingCustomer = await Customer.findOne({ email });
//     if (existingCustomer) {
//       return res.status(400).json({ message: 'Email already exists!' });
//     }

//     const salt = await GenerateSalt();
//     const userPassword = await GeneratePassword(password, salt);
//     const { otp, expiry } = GenerateOtp();

//     const result = await Customer.create({
//       email,
//       password: userPassword,
//       salt,
//       phone,
//       otp,
//       otp_expiry: expiry,
//       firstName: '',
//       lastName: '',
//       address: '',
//       verified: false,
//       lat: 0,
//       lng: 0,
//       orders: [],
//     });

//     if (result) {
//       await onRequestOTP(otp, phone);
//       const signature = await GenerateSignature({
//         _id: result._id,
//         email: result.email,
//         verified: result.verified,
//       });

//       return res.status(201).json({
//         signature,
//         verified: result.verified,
//         email: result.email,
//       });
//     }

//     return res.status(400).json({ msg: 'Error while creating user' });
//   } catch (error) {
//     console.error('Signup Error:', error);
//     return res.status(500).json({ msg: 'Internal server error' });
//   }
// };

// export const CustomerLogin = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;

//     const missing = validateRequired(['email', 'password'], req.body);
//     if (missing) return res.status(400).json({ message: missing });

//     const customer = await Customer.findOne({ email });
//     if (!customer) {
//       return res.status(404).json({ message: 'Invalid credentials!' });
//     }

//     const isValidPassword = await GeneratePassword(password, customer.salt);
//     if (isValidPassword !== customer.password) {
//       return res.status(403).json({ message: 'Invalid password!' });
//     }

//     const signature = await GenerateSignature({
//       _id: customer._id,
//       email: customer.email,
//       verified: customer.verified,
//     });

//     return res.status(200).json({
//       signature,
//       email: customer.email,
//       verified: customer.verified,
//     });
//   } catch (error) {
//     console.error('Login Error:', error);
//     return res.status(500).json({ msg: 'Internal server error' });
//   }
// };

// export const CustomerVerify = async (req, res, next) => {
//   try {
//     const customer = req.user; // assumed to be set by middleware
//     const { otp } = req.body;

//     if (!otp) return res.status(400).json({ message: 'OTP is required' });

//     const profile = await Customer.findById(customer._id);
//     if (!profile) return res.status(404).json({ message: 'User not found' });

//     if (profile.otp === otp && profile.otp_expiry >= new Date()) {
//       profile.verified = true;
//       const updatedCustomer = await profile.save();

//       const signature = await GenerateSignature({
//         _id: updatedCustomer._id,
//         email: updatedCustomer.email,
//         verified: updatedCustomer.verified,
//       });

//       return res.status(200).json({
//         signature,
//         verified: updatedCustomer.verified,
//         email: updatedCustomer.email,
//       });
//     }

//     return res.status(400).json({ message: 'Invalid or expired OTP' });
//   } catch (error) {
//     console.error('Verify Error:', error);
//     return res.status(500).json({ msg: 'Internal server error' });
//   }
// };

// export const RequestOtp = async (req, res, next) => {
//   try {
//     const customer = req.user; // assumed to be set by middleware
//     const profile = await Customer.findById(customer._id);
//     if (!profile) return res.status(404).json({ message: 'User not found' });

//     const { otp, expiry } = GenerateOtp();
//     profile.otp = otp;
//     profile.otp_expiry = expiry;
//     await profile.save();

//     await onRequestOTP(otp, profile.phone);

//     return res.status(200).json({ message: 'OTP sent successfully!' });
//   } catch (error) {
//     console.error('Request OTP Error:', error);
//     return res.status(500).json({ msg: 'Internal server error' });
//   }
// };

// export const GetCustomerProfile = async (req, res, next) => {
//   try {
//     const customer = req.user;
//     const profile = await Customer.findById(customer._id);
//     if (!profile) return res.status(404).json({ message: 'User not found' });

//     return res.status(200).json(profile);
//   } catch (error) {
//     console.error('Get Profile Error:', error);
//     return res.status(500).json({ msg: 'Internal server error' });
//   }
// };

// export const EditCustomerProfile = async (req, res, next) => {
//   try {
//     const customer = req.user;
//     const { firstName, lastName, address } = req.body;

//     const profile = await Customer.findById(customer._id);
//     if (!profile) return res.status(404).json({ message: 'User not found' });

//     if (firstName !== undefined) profile.firstName = firstName;
//     if (lastName !== undefined) profile.lastName = lastName;
//     if (address !== undefined) profile.address = address;

//     const updatedProfile = await profile.save();
//     return res.status(200).json(updatedProfile);
//   } catch (error) {
//     console.error('Edit Profile Error:', error);
//     return res.status(500).json({ msg: 'Internal server error' });
//   }
// };
