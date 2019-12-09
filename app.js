var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 19500;

app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

var indexRouter = require('./routes/index');
var uploadRouter = require('./routes/upload');
var addRouter = require('./routes/add');

app.use(express.static(path.join(__dirname, 'build')))

app.use('/', indexRouter);
app.use('/api', uploadRouter);
app.use('/api', addRouter);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
