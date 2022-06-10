const router = require('express').Router();
const { waiterValidator, validate } = require('../middleware/postValidator');
const {createWaiter, deleteWaiter } = require('../controllers/waitlist')
router.post(
    '/waitlist',
    waiterValidator, 
    validate,
     createWaiter
    );
router.post(
    '/:waiterId',
     waiterValidator, 
     validate,
     deleteWaiter
    );

    module.exports = router;