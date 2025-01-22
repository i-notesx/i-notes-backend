import express from 'express'
import { login, register, logout } from '../controllers/auth.js'

const router = express.Router()


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 */
router.post('/auth/login', login)

// 注册
router.post('/auth/register', register)

// 注销
router.post('/auth/logout', logout)

export default router