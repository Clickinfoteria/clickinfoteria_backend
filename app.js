require('express-async-errors');
const express = require('express')
require('dotenv').config()
require('./db');
// const morgan = require('morgan')
const postRouter = require('./routers/post')
const subscriberRouter = require('./routers/subscriber')
const waitRouter = require('./routers/waitlist')
const cors = require('cors')

const app = express()
app.use(express.json())
// app.use(morgan('dev'));
app.use('/api/post', postRouter)
app.use('/api/subscribe', subscriberRouter)
app.use('/api/wait', waitRouter)


app.use((err, req, res, next) =>{
    res.status(500).json({error: err.message});
})

const PORT = process.env.PORT || 4848;

app.listen(PORT, () =>{
    console.log('port is listening on ' + PORT);
})