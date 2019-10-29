import express from 'express'
import 'regenerator-runtime/runtime'
import cors from 'cors'
import router from './src/routers/router'
import './src/connect'
const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.OPENSHIFT_NODEJS_PORT || 4000
const server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
app.use(router)
app.listen(port, server_ip_address)

export default app