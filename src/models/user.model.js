const mongoose = require('mongoose');
const { connexDb } = require("../../config/default");
const AutoIncrement = require('mongoose-auto-increment');

const userSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
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
        unique: true
    },
    mdp:{
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
    },
    contacts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Contact'}]
});

/* user.plugin(AutoIncrement.plugin, 'User'); */

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;