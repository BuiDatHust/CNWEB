require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')
const connectMongoDb = require('./databases/connectMongo');
const routes = require('./routes');
const PORT = process.env.PORT || 3000;
// init app
const app = express();
// set security HTTP headers
app.use(helmet());

// set morgan
app.use(morgan('common'));
// parse json request body
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(cookieParser(process.env.COOKIE_NAME)) 
// enable cors
app.use(cors());
app.options('*', cors());

app.use('/api/swimmingpool/v1',routes);

app.use((req, res) => {
    res.status(404).send({ url: `${req.path} not found` });
});

app.listen(PORT, async () => {
    await connectMongoDb();
    console.log(`Server is running on port ${PORT}`);
});

process.on('unhandledRejection', error => {
    throw error
})
   
process.on('uncaughtException', error => {
    logError(error)

    if (!isOperationalError(error)) {
        process.exit(1)
    }
})

module.exports = app;
