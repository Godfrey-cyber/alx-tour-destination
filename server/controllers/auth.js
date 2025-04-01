import jwt from "jsonwebtoken"
import crypto from "crypto"
import bcrypt from "bcryptjs"
import User from '../models/Users.js'

export const register = async(req, res) => {
	const { firstName, lastName, password, email } = req.body

	if (!email || !password || !username) {
        return res.status(400).json({ msg: '❌ Please enter all fields' })
    }

    //verify email
    let validateEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!email.match(validateEmail)) {
        return res.status(400).json({ msg: "❌ Please enter a valid email address❗" })
    }

    //verify password
    let validatePassword=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!password.match(validatePassword)) {
        return res.status(400).json({ msg: "🚫 Password must be between 8 to 15 characters containing at least one lowercase letter, one uppercase letter, one numeric digit, and one special character" })
    }
}