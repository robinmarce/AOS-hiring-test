const express = require('express');
const router = express.Router();
const User = require('../database/models/user.model');


/* POST login. */
router.post('/', function(req, res, next) {
    User.findOne({ "email": req.body.email })
        .exec()
        .then( (user) => {
            console.log(user);
            if (user !== null && user.email) {
                if(user.password == req.body.password) {
                    res.status(200).send({
                        message: "Login réussi"
                    })
                } else {
                    res.status(200).send({
                        message: "Mot de passe incorrect"
                    })
                }
            } else {
                res.status(200).send({
                    message: "Utilisateur inconnu"
                })
            }
        });
    
  });

module.exports = router;
