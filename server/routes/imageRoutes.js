import express from 'express'
import {generateImage} from '../controllers/imageController.js'
import userAuth from '../middlewares.js/auth.js'

// API endpoint for Image generator
const imageRouter = express.Router()

imageRouter.post('/generate-image', userAuth ,generateImage)

export default imageRouter