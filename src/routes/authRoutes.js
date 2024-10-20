import express from 'express'
import { authController } from '../controllers/authController.js'

const authRoutes = express.Router()

authRoutes.get('/user', authController.user)
authRoutes.post('/login', authController.login)
authRoutes.post('/register', authController.register)
authRoutes.post('/logout', authController.logout)

export { authRoutes }
