import cors from 'cors'
import dotenv from "dotenv"
import express from "express"
import routes from './routes.js'

dotenv.config({ path: './.env' })

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

app.use('/api', routes)

app.listen(port, () => console.log(`Server listening on port ${port}`))