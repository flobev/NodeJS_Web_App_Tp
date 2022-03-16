var express = require('express');
var app = express();
var userModel = require('./models/user.model');

app.get('/AllMembers', async (req, res) => {
    const users = await userModel.find({});

  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/Member', function(req, res){
    res.render();
});

app.post('/add_user', async (req, res) => {
    const user = new userModel(req.body);

    try {
        await user.save();
        res.send(user);
        console.log(user);
    } catch (error) {
        res.status(500).send(error);
    }
    /* res.render(); */
});

app.post('/ModifyMember', function(req, res){
    res.render();
});

app.delete('/DelMember', function(req, res){
    res.render();
});

module.exports = app;