import express from 'express';
import { getUser, addUser, deleteUser } from '../controllers/user.js';

const router = express.Router();

// 获取用户信息
router.get('/user/info', getUser);

// 添加用户信息
// router.post('/user/add', addUser);

// 删除用户信息
// router.post('/user/del', deleteUser);

export default router;