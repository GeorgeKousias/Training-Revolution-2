const Positions = require('../models/positions.model')

exports.findAllPositions = async (req, res) => {
    console.log("Find all positions");

    try {
        const result = await Positions.find();
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading all the positions");
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading all the positions");
    }
}

exports.findPositionDecoding = async (req, res) => {
    const decoding = req.params.decoding
    console.log("Find position with decoding", decoding);
    try {
        const result = await Positions.findOne({ decoding: decoding });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading position with decoding", decoding);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading position with decoding", decoding);
    }
}

exports.findPositionTitle = async (req, res) => {
    const title = req.params.title
    console.log("Find position with title", title);
    try {
        const result = await Positions.findOne({ title: title });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading position with title", title);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading position with title", title);
    }
}

exports.findPositionAliases = async (req, res) => {
    const aliases = req.params.aliases
    console.log("Find position with alias", aliases);
    try {
        const result = await Positions.findOne({ aliases: aliases });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading position with alias", aliases);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading position with alias", aliases);
    }
}

exports.findPositionCategories = async (req, res) => {
    const categories = req.params.categories
    console.log("Find position with category", categories);
    try {
        const result = await Positions.find({ categories: categories });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading position with category", categories);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading position with category", categories);
    }
}

exports.findPositionSubcategories = async (req, res) => {
    const subcategories = req.params.subcategories
    console.log("Find position with subcategory", subcategories);
    try {
        const result = await Positions.find({ subcategories: subcategories });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading position with subcategory", subcategories);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading position with subcategory", subcategories);
    }
}

exports.findPositionTypes = async (req, res) => {
    const types = req.params.types
    console.log("Find position with type", types);
    try {
        const result = await Positions.find({ types: types });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading position with type", types);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading position with type", types);
    }
}

exports.findPositionVariations = async (req, res) => {
    const variations = req.params.variations
    console.log("Find position with variation", variations);
    try {
        const result = await Positions.find({ variations: variations });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading position with variation", variations);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading position with variation", variations);
    }
}

exports.findPositionDirections = async (req, res) => {
    const directions = req.params.directions
    console.log("Find position with direction", directions);
    try {
        const result = await Positions.find({ directions: directions });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading position with direction", directions);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading position with direction", directions);
    }
}

exports.findPositionConfigurations = async (req, res) => {
    const configurations = req.params.configurations
    console.log("Find position with configuration", configurations);
    try {
        const result = await Positions.find({ configurations: configurations });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading position with configuration", configurations);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading position with configuration", configurations);
    }
}

exports.findPositioniInclinations = async (req, res) => {
    const inclinations = req.params.inclinations
    console.log("Find position with inclination", inclinations);
    try {
        const result = await Positions.find({ inclinations: inclinations });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading position with inclination", inclinations);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading position with inclination", inclinations);
    }
}

exports.findPositionSource = async (req, res) => {
    const source = req.params.source
    console.log("Find position with source", source);
    try {
        const result = await Positions.findOne({ source: source });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading position with source", source);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading position with source", source);
    }
}