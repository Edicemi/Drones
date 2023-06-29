const mongoose = require('mongoose');
const droneSchema = new mongoose.Schema({
    number: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        enum : ['(Lightweight,','Middleweight,', 'Cruiserweight,', 'Heavyweight'],
    }
    weight: {
        type: String,
        required: true,
    },
    battery: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        enum : ['(idle,','loading,', 'delivering,', 'delivered', 'returning'],
        default: 'idle'
    }
   
}, { timestamps: true });

module.exports = mongoose.model('drone', droneSchema);