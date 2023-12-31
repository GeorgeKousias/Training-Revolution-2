const express = require('express');
const router = express.Router();

const exercisesController = require('../controllers/exercises.controller');

router.get('/', exercisesController.findAllExercises);
router.get('/:decoding', exercisesController.findExerciseDecoding);
router.get('/:title', exercisesController.findExerciseTitle);
router.get('/:aliases', exercisesController.findExerciseAliases);
router.get('/:categories', exercisesController.findExerciseCategories);
router.get('/:subcategories', exercisesController.findExerciseSubcategories);
router.get('/:types', exercisesController.findExerciseTypes);
router.get('/:focuses', exercisesController.findExerciseFocuses);
router.get('/:variations', exercisesController.findExerciseVariations);
router.get('/:motions', exercisesController.findExerciseMotions);
router.get('/:grips', exercisesController.findExerciseGrips);
router.get('/:configurations', exercisesController.findExerciseConfigurations);
router.get('/:facilitations', exercisesController.findExerciseFacilitations);
router.get('/:orientations', exercisesController.findExerciseOrientations);
router.get('/:equipment', exercisesController.findExerciseEquipment);
router.get('/:positions', exercisesController.findExercisePositions);
router.get('/:difficulty', exercisesController.findExerciseDifficulty);
router.get('/:source', exercisesController.findExerciseSource);

module.exports = router