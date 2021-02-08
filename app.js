const express = require('express');
const app = express();

const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));
app.use('/vendor', express.static('vendor'));

app.get('/', function (req, res) {
    // res.sendFile(__dirname + '/views/index.html');
    res.render('index');
});

app.get('/aboutus', function (req, res) {
    // res.sendFile(__dirname + '/views/about.html');
    res.render('about');
});

app.get('/services', function (req, res) {
    // res.sendFile(__dirname + '/views/services.html');
    res.render('services');
});

app.get('/contactus', function (req, res) {
    // res.sendFile(__dirname + '/views/contact.html');
    res.render('contact');
});

app.listen(3000, function () {
    console.log('Server running at 3000');
});