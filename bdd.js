const express = require('express');
const mongoose = require('mongoose');
const contactRoute = require('./src/routes/contact.route');
const bodyParser = require('body-parser');
const autoIncrement = require('mongoose-auto-increment');
const connexDb = require('./config/default')
const passport = require('passport');
const userModel = require('./src/models/user.model');
const LocalStrategy = require('passport-local').Strategy;

const app = express();
app.use(express.json());
app.use(contactRoute);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());
passport.use(new LocalStrategy(userModel.authenticate()));
/* app.use(bodyParser.urlencoded({ extended: true })); */

mongoose.connect("mongodb://localhost:27017/nodeTpExample",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Db connected my lord !!");
});



app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
