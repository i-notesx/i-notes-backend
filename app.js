const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // 允许跨域请求
app.use(express.json()); // 解析 JSON 请求体

app.get("/api", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.get("/login", (req, res) => {
  res.json({ message: "登录成功! (测试接口)" });
});

app.get("/logout", (req, res) => {
  res.json({ message: "退出登录! (测试接口)" });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
