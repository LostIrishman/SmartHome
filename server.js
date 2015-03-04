/**
 * Created by j.moran on 2/26/2015.
 */
var express = require('express');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();

/*var mongoose = require('mongoose');
mongoose.connect(config.db, config.MongoOptions);*/

app.listen(3000);
