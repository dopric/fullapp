const express = require('express')
const routes = require('./routes')
const app = express()

app.use(routes)

app.set('view engine', 'ejs')


app.listen(3000, function(){
    console.log("server is listening on port 3000")
})