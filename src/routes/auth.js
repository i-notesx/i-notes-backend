import express from 'express'
import { login, register, logout } from '../controllers/auth.js'

const router = express.Router()

// 登录
router.post('/auth/login', login)

// 注册
router.post('/auth/register', register)

// 注销
router.post('/auth/logout', logout)

export default router