const express = require('express');
const router = express.Router();
const {index} = require ('../controllers/mainController');
const {about} = require ('../controllers/mainController');

router.get('/',index);
router.get('/about',about)

module.exports = router;