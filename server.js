var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var exphbs = require('express-handlebars');
var port = process.env.PORT || 8080;
// app.use(express.static(__dirname + '/public'));



app.use(express.static("public"));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(methodOverride('_method'));





var routes = require('./controllers/routes.js');
app.use('/', routes);


app.listen(port);
