import mongoose from "mongoose"
import { Schema } from "mongoose"
import bcrypt from "bcryptjs"

const UserSchema = new mongoose.Schema({
    firstName: { type: String, unique: true, min: 4, required: true },
	lastName: { type: String, unique: true, min: 4, required: true },
    password: { type: String, required: true, select: false },
	email: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    verified: { type: Boolean, default: false }
}, { timestamps: true })

//encrypt password before saving
UserSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        return next()
    } else {
    //hash password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(this.password, salt)   
        this.password = hash
        next()
    }
})

export default mongoose.model("User", UserSchema)