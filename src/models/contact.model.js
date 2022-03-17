const mongoose = require('mongoose');
const { connexDb } = require("../../config/default");
const AutoIncrement = require('mongoose-auto-increment');

const contactSchema = new mongoose.Schema({
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
        required: false,
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
    _user: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
});

/* user.plugin(AutoIncrement.plugin, 'User'); */

const contactModel = mongoose.model('Contact', contactSchema);

module.exports = contactModel;