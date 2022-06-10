const router = require('express').Router();
const { subscriberValidator, validate } = require('../middleware/postValidator');

const {createSubscriber, deleteSubscriber } = require('../controllers/subscriber')
router.post(
    '/subscribe',
    // parseData,
    subscriberValidator, 
    validate,
     createSubscriber
    );
router.post(
    '/:subscriberId',
     deleteSubscriber
    );

    module.exports = router;