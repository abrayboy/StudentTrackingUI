var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 19500;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use(express.static(path.join(__dirname, 'build')))

app.use('/', indexRouter);
app.use('/users', usersRouter);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
