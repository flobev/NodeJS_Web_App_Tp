var express = require('express');
var app = express();
var contactModel = require('../models/contact.model');
const userController = require('../controllers/user.controller');
const contactController = require('../controllers/contact.controller');

app.get('/all_Contacts', async (req, res) => {
    const contacts = await contactModel.find({});

  try {
    res.send(contacts);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/', function(req, res) {

});

app.get('/contact', function(req, res){
    res.render();
});

app.post('/add_contact', async (req, res) => {
    const contacts = new contactModel(req.body);

    try {
        await contacts.save();
        res.send(contacts);
        console.log(contacts);
    } catch (error) {
        res.status(500).send(error);
    }
    /* res.render(); */
});

app.post('/modify_contact', function(req, res){
    res.render();
});

app.delete('/delete_contact', function(req, res){
    res.render();
});

app.post('/register', userController.register);
app.post('/register/contact', contactController.register);

module.exports = app;