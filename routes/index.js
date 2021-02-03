const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    console.log("index route")
    res.send("Hello index")
})

module.exports = router