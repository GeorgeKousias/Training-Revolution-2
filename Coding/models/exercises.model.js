const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema()

let exercisesSchema = new Schema({
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
    focuses: [String],
    variations: [String],
    motions: [String],
    grips: [String],
    configurations: [String],
    facilitations: [String],
    orientations: [String],
    equipment: [String],
    positions: [String],
    difficulty: {
        type: Number,
        trim: true,
    },
    source: {
        type: String,
        unique: true,
        trim: true,
    }
},
    {
        collection: 'exercises'
        timestamps: true
    });

exercisesSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Exercises', 'exercisesSchema');