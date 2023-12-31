const express = require('express');
const router = express.Router();

const musclesController = require('../controllers/muscles.controller');

router.get('/', musclesController.findAllMuscles);
router.get('/:decoding', musclesController.findMuscleDecoding);
router.get('/:title', musclesController.findMuscleTitle);
router.get('/:aliases', musclesController.findMuscleAliases);
router.get('/:categories', musclesController.findMuscleCategories);
router.get('/:subcategories', musclesController.findMuscleSubcategories);
router.get('/:types', musclesController.findMuscleTypes);
router.get('/:focuses', musclesController.findMuscleFocuses);

module.exports = router