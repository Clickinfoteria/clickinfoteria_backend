const router = require('express').Router();
const { subscriberValidator, validate } = require('../middleware/postValidator');

const {createSubscriber, deleteSubscriber, getSubscribers } = require('../controllers/subscriber')
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

    router.get(
        '/subscribers',
        getSubscribers
    )

    module.exports = router;