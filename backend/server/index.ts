import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectMongoDB from '../mongodb'

/**
 * @note
 * to access variables from .env
 */
dotenv.config()

/**
 * @note
 * NODE ENVs
 */
const API_SERVER_PORT: number | string = process.env.BACKEND_NODE_PORT || 4000

/**
 * @note
 * connecting to mongoDB
 */
connectMongoDB()

/**
 * @note
 * creating server
 */
const apiServer = express()

/**
 * @note
 * adding middlewars
 * - json parser
 * - url encoded parser at the POST BODY (x-www-form-urlencoded)
 */
apiServer.use(express.json())
apiServer.use(express.urlencoded({ extended: false }))

/**
 * @note
 * create server routes
 */
apiServer.use('/api/wallet', require('../endpoints/wallet'))
apiServer.use('/api/debits', require('../endpoints/debits'))
apiServer.use('/api/income', require('../endpoints/income'))

/**
 * @note
 * starting backend server
 */
apiServer.listen(API_SERVER_PORT, () => {
  console.log(
    `API server is running at  >>> ` +
      colors.underline.blue(`http://localhost:${API_SERVER_PORT}`)
  )
})
