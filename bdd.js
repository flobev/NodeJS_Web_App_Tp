const express = require('express');
const mongoose = require('mongoose');
const contactRoute = require('./src/routes/contact.route');
const bodyParser = require('body-parser');
const autoIncrement = require('mongoose-auto-increment');
const connexDb = require('./config/default')

const app = express();

app.use(express.json());
/* app.use(bodyParser.urlencoded({ extended: true })); */

mongoose.connect("mongodb://localhost:27017/nodeTpExample",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

/* autoIncrement.initialize(connection); */

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Db connected my lord !!");
});

app.use(contactRoute);

app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
