import mongosee from 'mongoose'
import { MONGODB_URI } from './config.js'

export async function connectDB() {
    try {
        const db = await mongosee.connect(MONGODB_URI)
        console.log('Connected to DB:', db.connection.name)
    } catch (error) {
        console.error(error)
    }
}