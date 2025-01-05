import { ResponseError, ResponseSuccess } from "../config/response.js"
import catchError from "../error/base.js"

export const getUser = (req, res, next) => {
  catchError(() => {
    res.json(new ResponseSuccess({}, '请求成功', -1).toJSON())
  }, res)
}

export const addUser = (req, res, next) => {
  res.send('addUser')
}

export const deleteUser = (req, res, next) => {
  res.send('deleteUser')
}