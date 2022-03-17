const mongoose = require('mongoose');
const { connexDb } = require("../../config/default");
const AutoIncrement = require('mongoose-auto-increment');

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    tel:{
        type: String,
        required: false,
    },
    mail:{
        type: String,
        required: true,
    },
    adresse:{
        numero: {
            type: String,
            required: false,
        },
        rue: {
            type: String,
            required: false,
        },
        ville: {
            type: String,
            required: false,
        },
        codePostal: {
            type: String,
            required: false,
        }
    }
});

/* user.plugin(AutoIncrement.plugin, 'User'); */

const bdd = mongoose.model('User', user);

module.exports = bdd;