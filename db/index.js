const mongoose = require('mongoose');
//process.env.MONGO_URL
mongoose
.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('db connected'))
.catch(err => console.log('db connection failed: ', err.message || err));