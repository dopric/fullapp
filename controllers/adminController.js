const express = require('express')
const router = express.Router()

const adminController = (req, res)=>{
   console.log("ADMIN")
   res.render("admin", {user: req.session.user})
}


module.exports = adminController;