const {check, validationResult} = require('express-validator');

exports.subscriberValidator = [
    check('name').trim().not().isEmpty().withMessage('Name title is missing'),
    check('email').trim().not().isEmpty().withMessage('Email content is missing'),
]

exports.validate = (req, res, next) =>{
    const error = validationResult(req).array();
    if (error.length){
        res.status(401).json({error: error[0].msg})
    }

    next();
}