import mongoose from "mongoose";

require('dotenv').config({
    path: ".env"
});

before(() => {
    mongoose.set('useFindAndModify', false);
    mongoose.connect(process.env.DB_HOST, {
        useNewUrlParser: true
    });
});

after(() => {
    mongoose.disconnect();
});