const mongoose = require('mongoose');

const subscriberSchema = mongoose.Schema({
    name :{
        type: String,
        required: true,
        trim: true
    },
    email :{
        type: String,
        required: true,
        trim: true
    } ,
  
} ,{
    timestamps: true,
});

module.exports = mongoose.model('Subscriber', subscriberSchema)