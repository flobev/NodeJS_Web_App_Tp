const contactModel = require('../models/contact.model');

exports.register = (req, res, next) => {        
    const user = new contactModel({
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

exports.delete = async (req, res, next) => {
    const deletedContact = await contactModel.findByIdAndRemove(req.params.id);

    if (deletedContact) {
        return res.json({
            error: false,
            message: 'Le contact a correctement été supprimé.'
        })
    }

    return res.json({
        error: true,
        message: 'Erreur lors de la suppression du contact.'
    })
}