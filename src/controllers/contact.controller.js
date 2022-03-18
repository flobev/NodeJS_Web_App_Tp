const ContactModel = require('../models/contact.model');

exports.register = (req, res, next) => {        
    const user = new ContactModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        tel: req.body.tel,
        email: req.body.email,
        address: req.body.address,
        // user: req.body._user
    });

    user.save()
    .then(() => {
        res.json({
            error: false,
            message: 'Le contact a correctement été ajouté.'
        })
    })
    .catch(error => {
        res.json({
            error: true,
            message: "Erreur lors de l'ajout du contact."
        })
    })
}