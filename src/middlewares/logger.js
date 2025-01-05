import { resolve } from 'path';
import morgan from 'morgan'
import fs from 'fs'

const logPath = resolve(process.cwd(), 'logs/access.log');

// 创建一个写入流，指定日志文件路径
const accessLogStream = fs.createWriteStream(logPath, { flags: 'a' });

export default morgan('combined', { stream: accessLogStream })