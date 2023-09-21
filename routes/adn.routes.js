import express from 'express'
import { mutationSearch, getStats } from '../controllers/dna.controller.js' 

const router = express.Router();

router.post('/mutation',mutationSearch)
router.get('/stats',getStats)

export default router