const express = require('express');

const router = express.Router();

router.get('/BrokerComissionStatement', (req, res, next) => {
    res.json(require('../mock/BrokerComissionStatement.json'));  
});

module.exports = router;
