import { ResponseError } from '../config/response.js'
import { logger } from '../config/logger.js'

export default function catchError(maybeThrowErrorTask, response, request) {
  if (typeof maybeThrowErrorTask !== 'function') {
    return
  }

  try {
    maybeThrowErrorTask && maybeThrowErrorTask.call(this)
  } catch (err) {
    // 错误处理逻辑
    logger.error(err.message);
    response?.json?.(new ResponseError(null, err?.message).toJSON())
  }
}