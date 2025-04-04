import mongoose from "mongoose"

export const connectDb = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URL)
		console.log("MongoDb connected successfuly")
	} catch (error) {
		console.error("MongoDb connnection error:", error.message)
		process.exit(1)
	}
}