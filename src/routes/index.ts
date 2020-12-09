import express from 'express'
import HttpRequestError from '../classes/HttpRequestError'

const router = express.Router()

// Example route
router.get('/ping', function (req, res) {
  res.send('pong')
})

// Example route with exception
router.get('/example/error', function (req, res) {
  throw new HttpRequestError('Custom error message', 520)
})

export default router
