import express from 'express'
// import { authenticate } from "../utilities/middleware.js"
import { register, login, refreshAccessToken, logout } from '../controllers/auth.js'

const router = express.Router()

router.post('/register-user', register)
router.post('/login-user', login)
router.get('/refresh', refreshAccessToken)
router.post('/logout', logout)

export default router
