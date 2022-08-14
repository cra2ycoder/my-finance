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
 * connect mongoDB
 */
connectMongoDB()

/**
 * @note
 * create server
 */
const apiServer = express()

/**
 * @note
 * add middle wars
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

/**
 * @note
 * start db server
 */
apiServer.listen(() => {
  console.log(
    `API server is running at  >>> ` +
      colors.underline.blue(`http://localhost:${API_SERVER_PORT}`)
  )
})
