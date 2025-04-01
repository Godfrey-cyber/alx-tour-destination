import express from 'express'
import { authenticate } from "../utilities/middleware.js"
import { register, login, changePassword } from '../controllers/auth.js'

const router = express.Router()

router.post("/register-user", register);
router.post("/login-user", login);

export default router

