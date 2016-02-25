var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path')

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('combined'));
app.set('port', (process.env.PORT || 8080));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use('/', require(path.join(__dirname, 'routes', 'index.js')))
app.listen(app.get('port'), function(err){
    if (err) console.log(err);

    console.log("Node app is running on port", app.get('port'));
});
