const mongoose = require('mongoose');
const { connexDb } = require("../../config/default");
const AutoIncrement = require('mongoose-auto-increment');

const contactSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Le prénom est requis.'],
    },
    lastname: {
        type: String,
        required: [true, 'Le nom est requis.'],
    },
    tel:{
        type: String,
        required: false,
    },
    email:{
        type: String,
        required: false,
    },
    address:{
        street: {
            type: String,
            required: false,
        },
        city: {
            type: String,
            required: false,
        },
        zipcode: {
            type: String,
            required: false,
        },
        country: {
            type: String,
            required: false,
        }
    },
    // _user: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
});

const contactModel = mongoose.model('Contact', contactSchema);

module.exports = contactModel;