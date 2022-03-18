const express = require('express');
const mongoose = require('mongoose');
const contactRoute = require('./src/routes/contact.route');
const bodyParser = require('body-parser');
const autoIncrement = require('mongoose-auto-increment');
const connexDb = require('./config/default')
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config();
const app = express();
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_ADRESS}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const userRoutes = require('./src/routes/user.route');


app.use(express.json());
/* app.use(bodyParser.urlencoded({ extended: true })); */

mongoose.connect("mongodb://localhost:27017/nodeTpExample");
app.use(bodyParser.urlencoded({
  extended: true
}));
/*
ma connexion avec variables d'environnement (.env)
mongoose.connect(uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);*§

/* autoIncrement.initialize(connection); */

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Db connected my lord !!");
});

app.use(contactRoute);
app.use('/api/', userRoutes);
app.use(Router);

app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
