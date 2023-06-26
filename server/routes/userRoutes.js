import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  logoutUser,
} from '../controller/userController.js'
import { protectRoutes } from '../middleware/authMiddleware.js'

router.post('/auth', authUser)
router.post('/register', registerUser)
router.post('/logout', logoutUser)

export default router
