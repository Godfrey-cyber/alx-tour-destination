import jwt from "jsonwebtoken"
import crypto from "crypto"
import bcrypt from "bcryptjs"
import User from '../models/Users.js'
import { createRefreshToken, createAccessToken, validateEmail, validatePassword } from "../utilities/utiles.js"

export const register = async(req, res) => {
	try {
		const { firstName, lastName, password, email } = req.body

		if (!email || !password || !firstName || !lastName) {
	        return res.status(400).json({ msg: '❌ Please enter all fields' })
	    }

	    // Validate email format
	    try {
	        validateEmail(email); // checks if the email contains an @
	    } catch (error) {
	        return res.status(400).json({ msg: error.message });
	    }

	    // Validate password format
	    try {
	        validatePassword(password); // checks if the password meets the required criteria
	    } catch (error) {
	        return res.status(400).json({ msg: error.message });
	    }

	    // check if user exists
	    const user = await User.findOne({email})
	    if (user) {
	        return res.status(400).json({ msg: "🚫 This email already exists!" })
	    }

	    // create a user
	    const newUser = new User({ firstName, lastName, password, email });
	    await newUser.save()
	    console.log("new registered user", newUser)
	    return res.status(201).json({ msg: "User Registration successfull🥇" })
	} catch (error) {
		console.log(error)
        res.status(500).json({ message: error.message })
	}
}

export const login = async (req, res) => {
	try {
		const { password, email } = req.body
        if(!email || !password) {
            return res.status(400).json({msg: '❌ Please fill in all fields'})
        }

        // Validate email & password format
        try {
            validateEmail(email);
            validatePassword(password);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }

        // check if user exists
        const user = await User.findOne({ email })
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return res.status(400).json({msg: "🚫 This email does not exist!"})
        }

        const ifPasswordIsCorrect = await bcrypt.compare(password, user.password)
        console.log("password correct", ifPasswordIsCorrect)
        if (!ifPasswordIsCorrect) {
            return res.status(400).json({ msg: "🚫 Invalid email or password." });
        }

        // Generate tokens
        const accessToken = createAccessToken(user._id);
        const refreshToken = createRefreshToken(user._id);

        // Send refresh token to the front-end
        res.cookie('refreshToken', refreshToken, {
            path: "/",
            httpOnly: true,
            maxAge: 86400000,
            sameSite: "Strict",
            secure: process.env.NODE_ENV === 'production'
        })
        res.status(200).json({ accessToken, msg: "Login successfull🥇" })
	} catch (error) {
		console.log(error.message)
        return res.status(500).json({ message: error.message })
	}
}

// Change Password
export const changePassword = async(req, res) => {
    try {
        const { previousPassword, password } = req.body;
        // Validate user fields
        if (!previousPassword || !password) return res.status(400).json({ message: "❌ Please enter all fields." });
        // Validate password format
        try {
            validatePassword(password);
        } catch (error) {
            return res.status(400).json({ msg: error.message });
        }
        // Fetch user from the database
        const user = await User.findById(req.userId);

        if (!user) return res.status(401).json({ message: "❌ User not found. Please log in again." });
        // Check if the previous password matches the user's current password
        const isPasswordMatch = await bcrypt.compare(previousPassword, user.password);
        console.log("is password match", isPasswordMatch)

        if (!isPasswordMatch) {
            throw new Error("🚫 Passwords did not match, please try again❗");
        }

        try {
            validatePassword(password); // Throws an error if validation fails
        } catch (validationError) {
            return res.status(400).json({ message: validationError.message });
        }

        // Update and save the new password
        user.password = password;
        await user.save();

        res.status(200).json({ message: "✅ Password has been changed successfully!" });
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
}

