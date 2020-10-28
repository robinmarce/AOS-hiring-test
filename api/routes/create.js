const express = require('express');
const router = express.Router();
const User = require('../database/models/user.model');


router.post('/', function(req, res, next) {
    const body = { email: "robin.marce@hotmail.fr", password: "aqszed" };
    const newUser = new User(body);
    newUser.save()
            .then( console.log("good"))
            .catch( err => {
                console.log(err);
            })
    
});


module.exports = router;