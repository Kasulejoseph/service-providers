import express from 'express'
import 'regenerator-runtime/runtime'
import cors from 'cors'
import router from './src/routers/router'
import './src/connect'
const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080
const server_ip_address = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || '0.0.0.0'
console.log(port, server_ip_address);

app.use(router)
app.listen(port, server_ip_address)

export default app