import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import helmet from "helmet"
import mongoose from "mongoose"
import nodemon from "nodemon"

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
	// origin: process.env.CLIENT_URL,
	origin: "http://localhost:5173",
	credentials: true
}))

const MONGO_URL = process.env.MONGODB_URL
const PORT = process.env.PORT || 5000

// mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connection.on("disconnected", (error) => {
//     console.log("❌ MongoDatabase disconnected❗", error)
// });

app.listen(PORT, () => {
    console.log(`Success 💯! Servers running on port: ${PORT} 👍`)
})