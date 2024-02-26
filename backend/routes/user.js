import express from 'express'
import postUser from '../controllers/user.js'

const userRouter = express.Router()

userRouter.post('/', postUser)

export default userRouter