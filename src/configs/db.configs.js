const mongoose = require('mongoose');

const {
    MONGO_HOST,
    MONGO_PORT,
    MONGO_DATABASE,
    MONGO_USERNAME, 
    MONGO_PASSWORD
} = process.env;

const MONGO_URI = `mongodb://${MONGO_USERNAME}: ${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}?authSource=admin`;

mongoose.connect(MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

mongoose.connection.on('error', err => {
    console.log('MngoDB connection error.');
    console.log(err);
    process.exit();
});

mongoose.connection.once('open', () => {
    console.log(`Connected to MongoDB: ${MONGO_URI}`);
});