const express = require('express')
const router = express.Router()

router.use('/', require('./home'))
router.use('/login',  require('../controllers/loginController'))
router.use('/admin', require('../controllers/adminController'))

module.exports = router