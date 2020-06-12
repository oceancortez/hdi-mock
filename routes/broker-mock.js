const express = require('express');

const router = express.Router();

router.get('/BrokerCommissionStatement', (req, res, next) => {

    switch (req.query.cdMock) {
        case 'one':
            res.json(require('../mock/BrokerComissionStatementOne.json'));
            break;
        case 'Sprint8Before':
            res.json(require('../mock/BrokerComissionStatementSprint8Before.json'));
            break;            
        case 'Sprint8After':
            res.json(require('../mock/BrokerComissionStatementSprint8After.json'));
            break;
        default:
            res.redirect('/400');
            break;
    }

});

module.exports = router;
