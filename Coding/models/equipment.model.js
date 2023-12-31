const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema()

let equipmentSchema = new Schema({
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
    categories: [String],
    subcategories: [String],
    types: [String],
    variations: [String],
    mechanisms: [String],
    configurations: [String],
    inclinations: [String],
    source: {
        type: String,
        unique: true,
        trim: true,
    },
},
    {
        collection: 'equipment'
        timestamps: true
    })

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Equipment', 'equipmentSchema');