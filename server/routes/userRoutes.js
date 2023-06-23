import express from 'express';
const router =express.Router();
import {authUser,registerUser,logoutUser} from '../controller/userController.js'
router.post('/auth',authUser)
router.post('/',registerUser)
router.post('/logout',logoutUser)
export default router;