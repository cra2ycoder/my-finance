import mongoose from 'mongoose'
import dotenv from 'dotenv'

// calling this for accessing the NODE_ENV vars from .env file
dotenv.config()

const MONGODB_CLUSTER_URI = process.env.MONGODB_CLUSTER_URI

if (!MONGODB_CLUSTER_URI) {
  throw new Error(
    'Please define the MONGODB_CLUSTER_URI environment variable inside .env'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { connection: null, promise: null }
}

async function connectMongoDB() {
  if (cached && cached.connection) {
    return cached.connection
  }

  if (!cached.promise) {
    const mge = {
      connection: null,
      promise: null,
    }

    const options = {
      bufferCommands: false,
      dbName: 'my-finance',
    }

    mge.promise = mongoose
      .connect(MONGODB_CLUSTER_URI, options)
      .then(mongoose => mongoose)

    mge.connection = await mge.promise
    console.log({ mge })
    cached = mge
    return mge.connection
  }
}

export default connectMongoDB
