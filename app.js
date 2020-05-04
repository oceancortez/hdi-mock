const express = require('express');
const bodyParser = require('body-parser');

const brokerMock = require('./routes/broker-mock');

const app = express();

// Doing parse automtic
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/brokerMock', brokerMock);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/' });
});

app.listen(3000);

console.log('hdi-mock Started =)');