const mongoose = require('mongoose');
require('dotenv').config();

const connectionString = process.env.CONNECTION_STRING;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connection established");
}).catch((err) => {
    console.log("Mongoose connection error: " + err);
});
