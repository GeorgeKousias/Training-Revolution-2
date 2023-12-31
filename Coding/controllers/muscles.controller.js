const Muscles = require('../models/muscles.model')

exports.findAllMuscles = async (req, res) => {
    console.log("Find all muscles");

    try {
        const result = await Muscles.find();
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading all the muscles");
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading all the muscles");
    }
}

exports.findMuscleDecoding = async (req, res) => {
    const decoding = req.params.decoding
    console.log("Find muscle with decoding", decoding);
    try {
        const result = await Muscles.findOne({ decoding: decoding });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading muscle with decoding", decoding);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading muscle with decoding", decoding);
    }
}

exports.findMuscleTitle = async (req, res) => {
    const title = req.params.title
    console.log("Find muscle with title", title);
    try {
        const result = await Muscles.findOne({ title: title });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading muscle with title", title);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading muscle with title", title);
    }
}

exports.findMuscleAliases = async (req, res) => {
    const aliases = req.params.aliases
    console.log("Find muscle with alias", aliases);
    try {
        const result = await Muscles.findOne({ aliases: aliases });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading muscle with alias", aliases);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading muscle with alias", aliases);
    }
}

exports.findMuscleSections = async (req, res) => {
    const sections = req.params.sections
    console.log("Find muscle with section", sections);
    try {
        const result = await Muscles.find({ sections: sections });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading muscle with section", sections);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading muscle with section", sections);
    }
}

exports.findMuscleBodyparts = async (req, res) => {
    const bodyparts = req.params.bodyparts
    console.log("Find muscle with bodypart", bodyparts);
    try {
        const result = await Muscles.find({ bodyparts: bodyparts });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading muscle with bodypart", bodyparts);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading muscle with bodypart", bodyparts);
    }
}

exports.findMuscleGroups = async (req, res) => {
    const groups = req.params.groups
    console.log("Find muscle with group", groups);
    try {
        const result = await Muscles.find({ groups: groups });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading muscle with group", groups);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading muscle with group", groups);
    }
}

exports.findMuscleSource = async (req, res) => {
    const source = req.params.source
    console.log("Find muscle with source", source);
    try {
        const result = await Muscles.findOne({ source: source });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading muscle with source", source);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading muscle with source", source);
    }
}