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

