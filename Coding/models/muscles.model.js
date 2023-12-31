const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema()

let musclesSchema = new Schema({
    id: {
        type: Number,
        required: [true, 'ID is a required field'],
        unique: true,
        trim: true,
    },
    decoding: {
        type: String,
        unique: true,
        trim: true,
    },
    title: {
        type: String,
        unique: true,
        trim: true,
    },
    aliases: [String],
    bodyparts: [String],
    sections: [String],
    groups: [String],
    source: {
        type: String,
        unique: true,
        trim: true,
    },
},
    {
        collection: 'muscles'
        timestamps: true
    })

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Muscles', 'musclesSchema');