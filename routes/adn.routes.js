const express = require('express');
const { mutationSearch, getStats } = require('../controllers/dna.controller');
const router = express.Router();

router.post('/mutation',mutationSearch)
router.get('/stats',getStats)

module.exports = router;