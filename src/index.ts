import express from 'express'
import cors from 'cors'
import { STATUS_CODES } from 'http'
import router from './routes'

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const ENV: 'development' | 'production' | string = process.env.NODE_ENV ?? 'production'
const port = process.env.PORT ?? 3000
const app = express()

app.use(express.json())
app.use(cors())
app.use('/', router)

// Catch route not found (404)
app.use((req, res, next) => {
  res
    .status(404)
    .send({
      message: STATUS_CODES[404],
    })
})

// Error handler
app.use((err, req, res, next) => {
  const status: number = err.status ?? err.statusCode ?? res.statusCode ?? 500

  console.error(err)
  if (res.headersSent) {
    return next(err)
  }
  res
    .status(status >= 400 ? status : 500)
    .json({
      message: ENV === 'development' ? err.message : STATUS_CODES[500],
      stack: ENV === 'development' ? err.stack : undefined,
    })
})

app.listen(port, () => {
  console.info(`App listening at http://localhost:${ port }`)
})
