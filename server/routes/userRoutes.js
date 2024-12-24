import express from 'express'
import { registerUser, loginUser, userCredits } from '../controllers/userController.js';
import userAuth from '../middlewares.js/auth.js';

const userRouter = express.Router()

// API Endpoints -> /api/user/....-> server.js check kro 

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/credits', userAuth ,userCredits)

export default userRouter

// https://localhost:4000/api/user/register
// localhost:4000/api/user/login