const mongoose = require('mongoose');

const instituteSchema = new mongoose.Schema({
    institute: {
        type: String,
        required: true
    },
    university: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model('institutes', instituteSchema);