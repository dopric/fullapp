const express = require('express')
const mongojs = require('mongojs')
const db = mongojs("fullapp", ['users'])

const loginController = (req, res) =>{
    console.log(req.params)
    const username = req.body.username;
    const password = req.body.password;
    console.log("get user")
    db.users.find({username: username, password: password}, (err, docs)=>{
        console.log("responded")
        if (err){
            console.log("could not find user")
            res.redirect('/')
        }
        if (docs.length === 1){
            let user = docs[0];
            console.log("User found")
            req.session.user = user;
            console.log("session set", req.session.user)
            if (user.role === "admin"){
                console.log("redirect to admin area")
                res.redirect("/admin")
            }else{
                console.log("redirect to main")
                res.redirect("/")
            }
        }else if (docs.length > 1){
            console.log("more than 1 user found")
            res.redirect('/')
        }else{
            console.log("no user found")
            res.redirect('/')
        }
    } )
}

module.exports = loginController;