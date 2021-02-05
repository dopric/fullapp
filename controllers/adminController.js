const express = require('express')
const router = express.Router()
const mongo = require('mongojs')
const db = mongo('freeapp', ['users'])



router.get('/', (req, res)=>{
   console.log("ADMIN")
   res.render("admin/adminDashboard", {user: req.session.user})
})


router.get('/createuser', (req, res)=>{
    res.render('admin/createuser')
})

module.exports = router;