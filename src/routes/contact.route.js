var express = require('express');
var app = express();
const userController = require('../controllers/user.controller');
const contactController = require('../controllers/contact.controller');
const contactModel = require('../models/contact.model');

app.get('/', async function(req, res) {
    const contacts = await contactModel.find({});
    res.render('index', { contactList: contacts });
});

app.get('/contact/new', function(req, res){
    res.render('contact-form');
});

app.post('/contact/add', contactController.register);

app.get('/contact/:id', async function(req, res) {
    // Il faut rechercher un contact par son id et par l'id de l'utilisateur connecté, sinon erreur.
    // const contact = await contactModel.find({ id: req.params.id, userId: userId });
    const contact = await contactModel.findById(req.params.id);
    res.render('contact-form', { contact: contact });
});

// app.put('/contact/:id', contactController.update);

app.delete('/contact/:id', contactController.delete);

module.exports = app;