import { RequestHandler } from 'express'

// Wrapper for route handler which catch unhandled promise rejection
// Based on https://github.com/Abazhenov/express-async-handler
export default function asyncHandler(fn: (...args: Parameters<RequestHandler>) => Promise<void>): RequestHandler {
  return (...args: Parameters<RequestHandler>) => fn(...args)
    .catch(args[2])
}
