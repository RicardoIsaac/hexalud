const express = require('express');
const { mutationSearch } = require('../controllers/dna.controller');
const router = express.Router();

router.post('/mutation',mutationSearch)
router.get('/stats',)

module.exports = router;