const router = require('express').Router();
const { subscriberValidator, validate } = require('../middleware/subscriberValidator');

const {createSubscriber, deleteSubscriber, getSubscribers } = require('../controllers/subscriber')
router.post(
    '/create-subscriber',
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