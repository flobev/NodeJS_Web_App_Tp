const ContactModel = require('../models/contact.model');
const localStrategy = require('passport-local');
const crypto = require('crypto');


exports.register = (req, res, next) => {        

    /* bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if(err) {
            res.json({
                error: err
            })
        }
    }); */
    /* console.log('hash', hashedPassword.toString()) */
    const user = new ContactModel({
        name: req.body.name,
        lastname: req.body.lastname,
        tel: req.body.tel,
        mail: req.body.mail,
        adresse: {
            numero: req.body.numero,
            rue: req.body.rue,
            ville: req.body.ville,
            codePostal: req.body.codePostal
        },
        user: req.body._user
    });
    console.log('ricardo');
    user.save()
    .then((res) => {
        console.log('111', '+', res, '+')
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
}