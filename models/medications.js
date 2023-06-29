const mongoose = require('mongoose');
const medicationSchema = new mongoose.Schema({
    droneId: {
        type: mongoose.Types.ObjectId,
        ref: "drone",
        required: true,
      },
    name: {
        type: String,
        required: true,
    },
    weight: {
        type: String,
        reqired: true,
    },
    code: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('medication', medicationSchema);