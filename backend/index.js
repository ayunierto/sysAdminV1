import express from 'express'
import usersRoutes from './routes/users.routes.js'
import { connectDB } from './db.js'
import {PORT } from './config.js'

const app = express()

connectDB()

app.use(usersRoutes)

app.listen(PORT)
console.log('Server on port:', PORT)