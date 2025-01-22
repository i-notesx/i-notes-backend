import express from 'express'
import { login, register, logout } from '../controllers/auth.js'

const router = express.Router()


/**
 * @openapi
 * /auth/login:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.post('/auth/login', login)

// 注册
router.post('/auth/register', register)

// 注销
router.post('/auth/logout', logout)

export default router