import express from "express"
import Tracking from './controllers/Tracking.js'

const app = express()

app.post('/track', Tracking.trackShipment)

export default app