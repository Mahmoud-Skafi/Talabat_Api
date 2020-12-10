const express = require('express'),
    bodyParser = require('body-parser'),
    routeHandler = require('./routers/router'),
    mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '../../.env' });

const app = express();
const middlewares = require('./middlewares');

app.use(bodyParser.urlencoded({ extended: true })); // for admin website
app.use(bodyParser.json()); // API Request
app.use(express.static(__dirname + './public'));


const url = `mongodb://root:irPuy7yhwQg2pAdm@cluster0-shard-00-00.61azx.mongodb.net:27017,cluster0-shard-00-01.61azx.mongodb.net:27017,cluster0-shard-00-02.61azx.mongodb.net:27017/voiceprint?ssl=true&replicaSet=atlas-qbuzaj-shard-0&authSource=admin&retryWrites=true&w=majority`;
const localurl = `mongodb://localhost:27017/voiceprint`
console.log('Connecting to database...');
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database successfully.');
    })
    .catch((err) => {
        console.log('Unable to connect to the mongodb instance. Error: ', err);
    });


//API's
app.use('/', routeHandler);
//Middlewares
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;