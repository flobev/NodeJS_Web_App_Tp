require('babel-register');

const { connexDb } = require("./config/default.js");

// Exportation du module 'express' permettant de créer un serveur
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'pug');

const contactList = [
    { id: 1, firstname: 'John', lastname: 'Doe', email: 'john.doe@gmail.com', mobile: '0601020304' },
    { id: 2, firstname: 'Michel', lastname: 'Dupont', email: 'michel.dupont@gmail.com', mobile: '0701020304' }
] 

app.get('/', (req, res) => {
    res.render('index', { contactList: contactList });
})

app.get('/login', (req, res) => {
    res.render('login');
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