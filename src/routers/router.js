import express from 'express'
import Providers from '../controllers/Providers'
const router = express.Router()

// TODO catch validator errors
router.post('/providers', Providers.addProvider)
router.get('/providers', Providers.getAllProvider)
router.get('/providers/:id', Providers.getSingleProvider)
router.put('/providers/:id', Providers.updateProvider)

export default router