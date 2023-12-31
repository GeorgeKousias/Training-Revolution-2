const express = require('express');
const router = express.Router();

const equipmentController = require('../controllers/equipment.controller');

router.get('/', equipmentController.findAllEquipment);
router.get('/:decoding', equipmentController.findEquipmentDecoding);
router.get('/:title', equipmentController.findEquipmentTitle);
router.get('/:aliases', equipmentController.findEquipmentAliases);
router.get('/:categories', equipmentController.findEquipmentCategories);
router.get('/:subcategories', equipmentController.findEquipmentSubcategories);
router.get('/:types', equipmentController.findEquipmentTypes);
router.get('/:variations', equipmentController.findEquipmentVariations);
router.get('/:mechanisms', equipmentController.findEquipmentMechanisms);
router.get('/:configurations', equipmentController.findEquipmentConfigurations);
router.get('/:inclinations', equipmentController.findEquipmentInclinations);
router.get('/:source', equipmentController.findEquipmentSource);

module.exports = router