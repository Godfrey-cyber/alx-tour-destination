import { allUsers, loggedInUser } from '../controllers/users.js'
import { authenticate } from "../utilities/middleware.js"
import express from 'express'
const router = express.Router()

router.get('/allUsers', allUsers)
router.get('/logged-in', loggedInUser)

export default router
