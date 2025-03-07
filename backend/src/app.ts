import 'express-async-errors'
import 'dotenv/config'
import cors from 'cors'

import { errorHandler } from './error'

import express from 'express'
import todoRouter from './routes/todo-item.router'

const app = express()
app.use(express.json())
app.use(cors())

app.use("/todo", todoRouter)

app.use(errorHandler)
export default app