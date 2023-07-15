const express = require('express');
const instituteController = require('../controllers/instituteController');
const instituteValidator = require('../validators/instituteValidator');

const router = express.Router();

router.post('/store', instituteValidator.createInstituteValidator, instituteController.createInstitute);
router.get('/getall', instituteController.getInstitutes);
router.get('/:id', instituteController.getInstituteById);
router.delete('/:id', instituteController.deleteInstituteById);
router.put('/:id', instituteValidator.createInstituteValidator, instituteController.updateInstituteById);


module.exports = router;