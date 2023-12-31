const Equipment = require('../models/equipment.model')

exports.findAllEquipment = async (req, res) => {
    console.log("Find all equipment");

    try {
        const result = await Equipment.find();
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading all the equipment");
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading all the equipment");
    }
}

exports.findEquipmentDecoding = async (req, res) => {
    const decoding = req.params.decoding
    console.log("Find equipment with decoding", decoding);
    try {
        const result = await Equipment.findOne({ decoding: decoding });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading equipment with decoding", decoding);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading equipment with decoding", decoding);
    }
}

exports.findEquipmentTitle = async (req, res) => {
    const title = req.params.title
    console.log("Find equipment with title", title);
    try {
        const result = await Equipment.findOne({ title: title });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading equipment with title", title);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading equipment with title", title);
    }
}

exports.findEquipmentAliases = async (req, res) => {
    const aliases = req.params.aliases
    console.log("Find equipment with alias", aliases);
    try {
        const result = await Equipment.findOne({ aliases: aliases });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading equipment with alias", aliases);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading equipment with alias", aliases);
    }
}

exports.findEquipmentCategories = async (req, res) => {
    const categories = req.params.categories
    console.log("Find equipment with category", categories);
    try {
        const result = await Equipment.find({ categories: categories });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading equipment with category", categories);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading equipment with category", categories);
    }
}

exports.findEquipmentSubcategories = async (req, res) => {
    const subcategories = req.params.subcategories
    console.log("Find equipment with subcategory", subcategories);
    try {
        const result = await Equipment.find({ subcategories: subcategories });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading equipment with subcategory", subcategories);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading equipment with subcategory", subcategories);
    }
}

exports.findEquipmentTypes = async (req, res) => {
    const types = req.params.types
    console.log("Find equipment with type", types);
    try {
        const result = await Equipment.find({ types: types });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading equipment with type", types);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading equipment with type", types);
    }
}

exports.findEquipmentVariations = async (req, res) => {
    const variations = req.params.variations
    console.log("Find equipment with variation", variations);
    try {
        const result = await Equipment.find({ variations: variations });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading equipment with variation", variations);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading equipment with variation", variations);
    }
}

exports.findEquipmentMechanisms = async (req, res) => {
    const mechanisms = req.params.mechanisms
    console.log("Find equipment with mechanism", mechanisms);
    try {
        const result = await Equipment.find({ mechanisms: mechanisms });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading equipment with mechanism", mechanisms);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading equipment with mechanism", mechanisms);
    }
}

exports.findEquipmentConfigurations = async (req, res) => {
    const configurations = req.params.configurations
    console.log("Find equipment with configuration", configurations);
    try {
        const result = await Equipment.find({ configurations: configurations });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading equipment with configuration", configurations);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading equipment with configuration", configurations);
    }
}

exports.findEquipmentInclinations = async (req, res) => {
    const inclinations = req.params.inclinations
    console.log("Find equipment with inclination", inclinations);
    try {
        const result = await Equipment.find({ inclinations: inclinations });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading equipment with inclination", inclinations);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading equipment with inclination", inclinations);
    }
}

exports.findEquipmentSource = async (req, res) => {
    const source = req.params.source
    console.log("Find equipment with source", source);
    try {
        const result = await Equipment.findOne({ source: source });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading equipment with source", source);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading equipment with source", source);
    }
}