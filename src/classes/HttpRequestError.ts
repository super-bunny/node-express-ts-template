export default class HttpRequestError extends Error {
  statusCode?: number

  constructor(m: string, statusCode?: number) {
    super(m)

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, HttpRequestError.prototype)

    this.name = 'HttpRequestError'
    this.statusCode = statusCode ?? 500
  }
}
