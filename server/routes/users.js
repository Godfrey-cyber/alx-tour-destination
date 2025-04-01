import { allUsers } from '../controllers/users.js'
import express from "express"
const router = express.Router()

router.get("/users", allUsers);

export default router