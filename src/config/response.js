export const SUCCESS_CODE = {
  NORMAL: 0,
}

export const ERROR_CODE = {
  NORMAL: 1,
  TOKEN_EXPIRED: -10001
}

class Response {
  constructor(data, message, code) {
    this.data = data || null;
    this.message = message || '';
    this.code = code;
  }

  toJSON() {
    return {
      code: this.code,
      data: this.data,
      msg: this.message
    }
  }
}

export class ResponseSuccess extends Response {
  constructor(data, message, code = SUCCESS_CODE.NORMAL) {
    if (!Object.values(SUCCESS_CODE).includes(code)) {
      throw new Error('ResponseSuccess code 只包含 ' + Object.values(SUCCESS_CODE).join('|'));
    }
    super(data, message, code);
  }
}

export class ResponseError extends Response {
  constructor(data, message, code = ERROR_CODE.NORMAL) {
    if (!Object.values(ERROR_CODE).includes(code)) {
      throw new Error('ResponseError code 只包含 ' + Object.values(ERROR_CODE).join('|'));
    }
    super(data, message, code);
  }
}