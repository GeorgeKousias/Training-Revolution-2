const Exercises = require('../models/exercises.model')

exports.findAllExercises = async (req, res) => {
    console.log("Find all exercises");

    try {
        const result = await Exercises.find();
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading all the exercises");
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading all the exercises");
    }
}

exports.findExerciseDecoding = async (req, res) => {
    const decoding = req.params.decoding
    console.log("Find exercise with decoding", decoding);
    try {
        const result = await Exercises.findOne({ decoding: decoding });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading exercise with decoding", decoding);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading exercise with decoding", decoding);
    }
}

exports.findExerciseTitle = async (req, res) => {
    const title = req.params.title
    console.log("Find exercise with title", title);
    try {
        const result = await Exercises.findOne({ title: title });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading exercise with title", title);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading exercise with title", title);
    }
}

exports.findExerciseAliases = async (req, res) => {
    const aliases = req.params.aliases
    console.log("Find exercise with alias", aliases);
    try {
        const result = await Exercises.findOne({ aliases: aliases });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading exercise with alias", aliases);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading exercise with alias", aliases);
    }
}

exports.findExerciseCategories = async (req, res) => {
    const categories = req.params.categories
    console.log("Find exercise with category", categories);
    try {
        const result = await Exercises.find({ categories: categories });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading exercise with category", categories);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading exercise with category", categories);
    }
}

exports.findExerciseSubcategories = async (req, res) => {
    const subcategories = req.params.subcategories
    console.log("Find exercise with subcategory", subcategories);
    try {
        const result = await Exercises.find({ subcategories: subcategories });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading exercise with subcategory", subcategories);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading exercise with subcategory", subcategories);
    }
}

exports.findExerciseTypes = async (req, res) => {
    const types = req.params.types
    console.log("Find exercise with type", types);
    try {
        const result = await Exercises.find({ types: types });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading exercise with type", types);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading exercise with type", types);
    }
}

exports.findExerciseFocuses = async (req, res) => {
    const focuses = req.params.focuses
    console.log("Find exercise with focus", focuses);
    try {
        const result = await Exercises.find({ focuses: focuses });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading exercise with focus", focuses);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading exercise with focus", focuses);
    }
}

exports.findExerciseVariations = async (req, res) => {
    const variations = req.params.variations
    console.log("Find exercise with variation", variations);
    try {
        const result = await Exercises.find({ variations: variations });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading exercise with variation", variations);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading exercise with variation", variations);
    }
}

exports.findExerciseMotions = async (req, res) => {
    const motions = req.params.motions
    console.log("Find exercise with motion", motions);
    try {
        const result = await Exercises.find({ motions: motions });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading exercise with motion", motions);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading exercise with motion", motions);
    }
}

exports.findExerciseGrips = async (req, res) => {
    const grips = req.params.grips
    console.log("Find exercise with grip", grips);
    try {
        const result = await Exercises.find({ grips: grips });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading exercise with grip", grips);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading exercise with grip", grips);
    }
}

exports.findExerciseConfigurations = async (req, res) => {
    const configurations = req.params.configurations
    console.log("Find exercise with configuration", configurations);
    try {
        const result = await Exercises.find({ configurations: configurations });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading exercise with configuration", configurations);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading exercise with configuration", configurations);
    }
}

exports.findExerciseFacilitations = async (req, res) => {
    const facilitations = req.params.facilitations
    console.log("Find exercise with facilitation", facilitations);
    try {
        const result = await Exercises.find({ facilitations: facilitations });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading exercise with facilitation", facilitations);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading exercise with facilitation", facilitations);
    }
}

exports.findExerciseOrientations = async (req, res) => {
    const orientations = req.params.orientations
    console.log("Find exercise with orientation", orientations);
    try {
        const result = await Exercises.find({ orientations: orientations });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading exercise with orientation", orientations);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading exercise with orientation", orientations);
    }
}

exports.findExerciseEquipment = async (req, res) => {
    const equipment = req.params.equipment
    console.log("Find exercise with equipment", equipment);
    try {
        const result = await Exercises.find({ equipment: equipment });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading exercise with equipment", equipment);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading exercise with equipment", equipment);
    }
}

exports.findExercisePositions = async (req, res) => {
    const positions = req.params.positions
    console.log("Find exercise with position", positions);
    try {
        const result = await Exercises.find({ positions: positions });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading exercise with position", positions);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading exercise with position", positions);
    }
}

exports.findExerciseDifficulty = async (req, res) => {
    const difficulty = req.params.difficulty
    console.log("Find exercise with difficulty", difficulty);
    try {
        const result = await Exercises.find({ difficulty: difficulty });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading exercise with difficulty", difficulty);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading exercise with difficulty", difficulty);
    }
}

exports.findExerciseSource = async (req, res) => {
    const source = req.params.source
    console.log("Find exercise with source", source);
    try {
        const result = await Exercises.findOne({ source: source });
        res.status(200).json({ status: true, data: result });
        console.log("Success in reading exercise with source", source);
    } catch (error) {
        res.status(400).json({ status: false, data: error });
        console.log("Problem in reading exercise with source", source);
    }
}