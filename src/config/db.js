import mongoose from 'mongoose'
import env from './env.js'

// const uri = `${env.DB_TYPE}://${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`
const uri = `${env.DB_TYPE}://mongo:${env.DB_PORT}/${env.DB_NAME}`

// 连接到 MongoDB
mongoose.connect(uri)
  .then((value) => {
    console.log('数据库连接成功');
  })
  .catch(err => {
    console.error('数据库连接失败:', err);
  });

// 关闭连接  
mongoose.connection.on('disconnected', () => {
  console.log('数据库连接已关闭');
});