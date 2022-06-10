const mongoose = require('mongoose');

const waiterSchema = mongoose.Schema({

    email :{
        type: String,
        required: true,
        trim: true

    } ,
  
} ,{
    timestamps: true,
});

module.exports = mongoose.model('Waiter', waiterSchema)