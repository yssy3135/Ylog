const express = require("express");
const app = express();
const path = require("path");
const config = require("./config/key");
require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const mongoose = require("mongoose");
const connect = mongoose.connect(config.mongoURI,
    {
        useNewUrlParser: true, useUnifiedTopology: true,
        useCreateIndex: true, useFindAndModify: false

    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api/users', require('./routes/users'));
app.use('/api/contents',require('./routes/contents'))
app.use('/api/categorys',require('./routes/categorys'))

app.use('/uploads', express.static('uploads'));




const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
});