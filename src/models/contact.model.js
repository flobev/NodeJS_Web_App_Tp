const mongoose = require('mongoose');
const { connexDb } = require("../../config/default");
const AutoIncrement = require('mongoose-auto-increment');
const passportLocalMongoose = require('passport-local-mongoose');

const contactSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: false,
    },
    tel:{
        type: String,
        required: false,
    },
    mail:{
        type: String,
        required: true,
    },
    password: {
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

contactSchema.plugin(passportLocalMongoose);
/* user.plugin(AutoIncrement.plugin, 'User'); */

const contactModel = mongoose.model('Contact', contactSchema);

module.exports = contactModel;