const express = require("express");
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/routes'));
app.use(express.static(__dirname + '/public'));

const indexRouter = require('./routes/index');
const mapRouter = require('./routes/map');
app.use('/', indexRouter);
app.use('/map', mapRouter);

app.listen(3000);

console.log("Running at Port 3000");