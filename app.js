import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { router } from './src/routes/index.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT ?? 4000

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use('/api', router)

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`)
})
