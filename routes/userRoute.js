import express from 'express'
import { Login, Logout, Register } from '../controllers/user.controller.js'

const route=express.Router()

route.post('/signup',Register)
route.post('/login',Login)
route.get('/logout',Logout)


export default route;