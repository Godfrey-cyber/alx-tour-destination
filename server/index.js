import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
// import helmet from "helmet"
import { errorHandler } from './middleware/errorHandler.js'
import { connectDb } from './config/db.js'

import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import destinationRoutes from './routes/destinations.js'
import bookingRoutes from './routes/bookings.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(
	cors({
		// origin: process.env.CLIENT_URL,
		origin: 'http://localhost:5173',
		credentials: true,
	})
)

// mongoose.connect(process.env.MONGODB_URL)
// mongoose.connection.on('disconnected', (error) => {
//   console.log('❌ MongoDatabase disconnected❗', error)
// })
connectDb()

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/destinations', destinationRoutes)
app.use('/api/v1/bookings', bookingRoutes)

app.use(errorHandler)

const PORT = process.env.PORT || process.env.npm_package_config_port

app.listen(PORT, () => {
	console.log(`Success 💯! Servers running on port: ${PORT} 👍`)
})
