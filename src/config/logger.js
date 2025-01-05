import { createLogger, format, transports } from 'winston'

const logger = createLogger({
  level: 'info', // 默认日志级别  
  format: format.combine(
    format.timestamp(), // 添加时间戳  
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new transports.Console(), // 控制台输出  
    // 如果需要写入文件，可以取消以下注释并设置文件路径  
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log', level: 'warn' }),
  ],
});

// 允许外部使用不同的日志级别  
const setLogLevel = (level) => {
  logger.level = level;
};

export {
  logger,
  setLogLevel,
};  