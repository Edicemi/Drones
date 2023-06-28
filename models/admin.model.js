const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        reqired: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        required: true,
    },
    status: {
        type: String,
        enum : ['Completed','Pending'],
        default: 'Completed'
    }
   
}, { timestamps: true });

module.exports = mongoose.model('admin', adminSchema);