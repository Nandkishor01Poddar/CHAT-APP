const mongoose = require('mongoose');

const connectToDB = async() => {
    try {
        mongoose.connect()
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database', error);
    }
}

module.exports = connectToDB;