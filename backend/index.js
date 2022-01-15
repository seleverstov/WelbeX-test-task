const express = require('express');
const router = require('./API/routes');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.listen(process.env.PORT || 3000);
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    next();
});
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './dist')));
app.use(router);
