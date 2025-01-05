import express from "express";
import cors from "cors";
import env from "./src/config/env.js"
import userRouter from "./src/routes/user.js";
import categoryRouter from "./src/routes/category.js";
import noteRouter from "./src/routes/note.js";
import authRouter from "./src/routes/auth.js";
import loggerMiddleware from './src/middlewares/logger.js'
import './src/config/db.js'

const app = express();
const PORT = env.PORT;

app.use(cors()); // 允许跨域请求
app.use(express.json()); // 解析 JSON 请求体
app.use(loggerMiddleware) // 记录日志

// 登录路由
app.use(env.BASE_PATH, authRouter)
// 用户路由
app.use(env.BASE_PATH, userRouter);
// 笔记分类路由
app.use(env.BASE_PATH, categoryRouter);
// 笔记路由
app.use(env.BASE_PATH, noteRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
