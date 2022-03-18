const express = require('express');
const app = express();
const contactModel = require('../models/contact.model');
const userModel = require('../models/user.model');
const userController = require('../controllers/user.controller');
const contactController = require('../controllers/contact.controller');
const router = express.Router(); 

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
    const contacts = new contactController(req.body);

    try {
        await contacts.save();
        res.send(contacts);
        console.log(contacts);
    } catch (error) {
        res.status(500).send(error);
    }
    /* res.render(); */
});

// Register test des contacts avec Passport
/* app.post('/login/test', function(req, res) {
      
    Contacts = new contactModel({username: req.body.username, mail: req.body.mail, password: req.body.password});
  
    contactModel.register(Contacts, req.body.password, function(err, user) {
        if (err) {
            res.json({success: false, message:"Your account could not be saved. Error: ", err});
        }else{
            res.json({success: true, message: "Your account has been saved"})
        }
    });
}); */

// Register des utilisateurs
app.post('/user/register', function(req, res) {
      
    Users = new userModel({username: req.body.username, mail: req.body.mail, password: req.body.password});
    console.log(Users);
    userModel.register(Users, req.body.password, function(err, user) {
        if (err) {
            res.json({success: false, message:"Your user could not be saved. Error: ", err});
        }else{
            res.json({success: true, message: "Your user has been saved"})
        }
    });
});

app.post('/modify_contact', function(req, res){
    res.render();
});

app.delete('/delete_contact', function(req, res){
    res.render();
});

/* app.post('/register', userController.register);
app.post('/register/contact', contactController.register); */

module.exports = app;