const express = require('express')
const router = express.Router();

router.get('/', (req, res)=>{
    console.log("thank you, good bye")
    req.session.destroy((err)=>{
         console.log("user logged out")
        res.redirect('/')
    });
   
})
module.exports = router;