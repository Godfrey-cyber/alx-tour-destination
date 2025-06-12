import express from 'express'
import { authenticate } from '../utilities/middleware.js'
import { rateLimiter } from '../middleware/rateLimiter.js'
import { register, login, refreshAccessToken, logout, changePassword } from '../controllers/auth.js'

const router = express.Router()

router.post('/register-user', rateLimiter, register)
router.post('/login-user', rateLimiter, login)
router.get('/refresh', refreshAccessToken)
router.post('/change-password', rateLimiter, authenticate, changePassword)
router.post('/logout', logout)

export default router
