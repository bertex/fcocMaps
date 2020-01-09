// api.js
const express = require('express');
const router = express.Router();
const layer = require('../controllers/layerController')
router.get('/layers/layer', layer.getGeojson)
module.exports = router;
