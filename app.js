var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 19500;

// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var indexRouter = require('./routes/index');
var uploadRouter = require('./routes/upload');
var addRouter = require('./routes/add');
var studentRouter = require('./routes/students');
var findRouter = require('./routes/findStudent');

app.use(express.static(path.join(__dirname, 'build')))

app.use('/', indexRouter);
app.use('/api', uploadRouter);
app.use('/api', addRouter);
app.use('/api', studentRouter);
app.use('/api', findRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
