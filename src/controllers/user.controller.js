const UserModel = require('../models/user.model');
const localStrategy = require('passport-local');
const crypto = require('crypto');


exports.register = (req, res, next) => {
    crypto.pbkdf2("secret", "salt", 100000, 64, 'sha512', function(err, hashedPassword) {
        if (err)
            return res.json({ error: err })

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