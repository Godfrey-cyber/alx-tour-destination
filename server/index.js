import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import helmet from "helmet"
import mongoose from "mongoose"

import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
	// origin: process.env.CLIENT_URL,
	origin: "http://localhost:5173",
	credentials: true
}))

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_URL);
mongoose.connection.on("disconnected", (error) => {
    console.log("❌ MongoDatabase disconnected❗", error)
});

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/auth', authRoutes)

app.listen(PORT, () => {
    console.log(`Success 💯! Servers running on port: ${PORT} 👍`)
})