// Importation du module 'babel-register'
require('babel-register');

const { connexDb } = require("./config/default.js");

// Exportation du module 'express' permettant de créer un serveur
const express = require('express');

// Exportation du module 'body-parser' permettant d'utiliser la méthode POST
const bodyParser = require('body-parser');

// Création d'une instance de express
const app = express();

app.use(bodyParser.json()); // Permet de parser les données JSON
app.use(bodyParser.urlencoded({ extended: true })); // Permet de parser les données urlencoded

// HTTP request, HTTP response, next function
app.use((req, res, next) => {
    console.log('request url: ', req.url);
    next(); // Permet d'exécuter la suite de la requête
})

// Création d'une route GET.
app.get('/api', function(req, res){
    res.send('Hello, world!');
})

app.post('/add_member', async (req, res) => {
    const user = new userModel(req.body);

    try {
        await user.save();
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
    /* res.render(); */
});

app.listen(8080, () => {
    console.log('Server is running at http://localhost:8080')
});