const mongoose = require('mongoose');

const PiratesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least {MINLENGTH}"],
    },
    img: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least {MINLENGTH}"],
    },
    position: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least {MINLENGTH}"],
    },
    phrase: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least {MINLENGTH}"],
    },
    treasures: {
        type: Number,
        required: [true, "{PATH} is required"],
        min: [0, "{PATH} must be at least {MIN}"],
    },
    leg: {
        type: Boolean,
        required: [true, "{PATH} is required"],
    },
    eye: {
        type: Boolean,
        required: [true, "{PATH} is required"],
    },
    hand: {
        type: Boolean,
        required: [true, "{PATH} is required"],
    },

}, { timestamps: true });

const Pirates = mongoose.model('Pirates', PiratesSchema);

module.exports = Pirates;
