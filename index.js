import express from 'express'
import router from './src/routers/router'
import './src/connect'
const app = express()
app.use(express.json())
const port = 4000
app.use(router)
app.listen(port)

export default app