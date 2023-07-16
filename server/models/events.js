const mongoose = require('mongoose');
const eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    schedule: {
        type: Date,
        required: true,
    }
}
);

module.exports = mongoose.model('Event',eventSchema);