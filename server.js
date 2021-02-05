const express = require('express')
const routes = require('./routes')
const app = express()
const session = require('express-session')
const halfHour = 1000 * 60 * 30;
const {
    PORT = 3000,
    NODE_ENV = "development",
    SESS_NAME = "sidfullapp",
    SESS_SECRET =  "fullapp",
    SESS_LIFETIME = halfHour,
} = process.env;

const IN_PROD = NODE_ENV === "production"? true: false;

app.use(express.static(__dirname + "/public"))

app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.use(session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    cookie: {
        maxAge: SESS_LIFETIME,
        sameSite: true,
        secure: IN_PROD,
    }
}))
app.use(routes)
app.get('/', routes)
app.set('view engine', 'ejs')


app.listen(PORT, function(){
    console.log("server is listening on port 3000")
})