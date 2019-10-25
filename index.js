import express from 'express'

import './src/connect'
import './src/models/Users'
const app = express()
const port = 4000
app.listen(port)

export default app