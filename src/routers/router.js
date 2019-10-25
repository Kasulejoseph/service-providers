import express from 'express'
import Providers from '../controllers/Providers'
const router = express.Router()

// TODO catch validator errors
router.post('/api/isp', Providers.addProvider)
router.get('/api/isp', Providers.getAllProvider)
router.get('/api/isp/:id', Providers.getSingleProvider)
router.put('/api/isp/:id', Providers.updateProvider)

export default router