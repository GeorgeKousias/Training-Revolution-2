const express = require('express');
const router = express.Router();

const positionsController = require('../controllers/positions.controller');

router.get('/', positionsController.findAllPositions);
router.get('/:decoding', positionsController.findPositionDecoding);
router.get('/:title', positionsController.findPositionTitle);
router.get('/:aliases', positionsController.findPositionAliases);
router.get('/:categories', positionsController.findPositionCategories);
router.get('/:subcategories', positionsController.findPositionSubcategories);
router.get('/:types', positionsController.findPositionTypes);
router.get('/:variations', positionsController.findPositionVariations);
router.get('/:directions', positionsController.findPositionDirections);
router.get('/:configurations', positionsController.findPositionConfigurations);
router.get('/:inclinations', positionsController.findPositionInclinations);
router.get('/:source', positionsController.findPositionSource);

module.exports = router