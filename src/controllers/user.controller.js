const UserModel = require('../models/user.model');
const localStrategy = require('passport-local');
const crypto = require('crypto');


exports.register = (req, res, next) => {
    crypto.pbkdf2("secret", "salt", 100000, 64, 'sha512', function(err, hashedPassword) {
        if (err) { return res.json({
            error: err
        }) }        

    /* bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if(err) {
            res.json({
                error: err
            })
        }
    }); */
        console.log('hash', hashedPassword.toString())
        const user = new UserModel({
            id: req.body._id,
            name: req.body.name,
            lastname: req.body.lastname,
            tel: req.body.tel,
            mail: req.body.mail,
            mdp: hashedPassword,
            adresse: {
                numero: req.body.numero,
                rue: req.body.rue,
                ville: req.body.ville,
                codePostal: req.body.codePostal
            }
        });
        console.log('ricardo');
        user.save()
        .then(res => {
            console.log('111', res)
            res.status(200).send({
                message: "User added !"
            })
        })
        .catch(error => {
            console.log('err', error)
            res.json({
                message: "An error occured !"
            })
        })
    });
}
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require('../models/user.model');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var crypto = require('crypto');

exports.login = async (req, res) => {
  passport.use(new LocalStrategy(function verify(username, password, cb) {
        const user = await userModel.findOne({email: req.body.email});
        console.log('user', user, 'salt', process.env.SALT);
        if (!user) 
          res.status(401).send("Utilisateur inexistant");
          crypto.pbkdf2(password, process.env.SALT, 310000, 32, 'sha256', function(err, hashedPassword) {
            if (err) { return err; }
            if (!crypto.timingSafeEqual(user.password, hashedPassword)) {
              return 'Incorrect username or password.';
            }
            res.status(200).send({user});
          });
      }));
}

