const ContactModel = require('../models/contact.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const localStrategy = require('passport-local');
const crypto = require('crypto');


const register = (req, res, next) => {        

    crypto.pbkdf2("secret", "salt", 100000, 64, 'sha512', function(err, hashedPassword) {
        if(err) {
            res.json({
                error: err
            })
        }
        console.log('hash', hashedPassword)
        let contact = new ContactModel({
            name: req.body.name,
            lastname: req.body.lastname,
            tel: req.body.tel,
            mail: req.body.mail,
            password: hashedPassword,
            adresse: {
                numero: req.body.numero,
                rue: req.body.rue,
                ville: req.body.ville,
                codePostal: req.body.codePostal
            }
        });
        contact.save()
        .then(() => {
            /* console.log('111', '+', res, '+') */
            res.json({
                message: "Contact added !"
            })
        })
        .catch(error => {
            console.log('err', error)
            res.json({
                message: "Contact can't be add!"
            })
        })
    });
    /* console.log('hash', hashedPassword.toString()) */
}

module.exports = {register};