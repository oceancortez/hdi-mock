const express = require('express');
const bodyParser = require('body-parser');

const brokerMock = require('./routes/broker-mock');

const app = express();

// Doing parse automtic
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/brokerMock', brokerMock);

app.use((req, res, next) => {
    if (req.path === '/400'){
        res.status(400).send('<h3> BAD REQUEST </h3>');
    } else {
        res.status(404).send('<h3> PAGE NOT FOUND </h3>');
    }
});

app.listen(3000);

console.log('hdi-mock Started =)');