const express = require('express');

const router = express.Router();

router.get('/BrokerComissionStatement', (req, res, next) => {

    switch (req.query.cdMock) {
        case 'one':
            res.json(require('../mock/BrokerComissionStatementOne.json'));
            break;
        case 'two':
            res.json(require('../mock/BrokerComissionStatementTwo.json'));
            break;
        default:
            res.redirect('/400');
            break;
    }

});

module.exports = router;
