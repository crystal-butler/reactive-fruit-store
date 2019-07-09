// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;
const arts = require('./arts');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

console.log(`arts is ${arts} in server.js`);

app.get('/arts', (req, res) => {
    res.json(arts);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});