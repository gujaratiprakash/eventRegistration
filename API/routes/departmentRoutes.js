const express = require('express');
const departmentController = require('../controllers/departmentController');
const departmentValidator = require('../validators/departmentValidator');

const router = express.Router();

router.post('/store', departmentValidator.createDepartmentValidator, departmentController.createDepartment);
router.get('/getall', departmentController.getDepartments);
router.get('/:id', departmentController.getDepartmentById);
router.delete('/:id', departmentController.deleteDepartmentById);
router.put('/:id', departmentValidator.createDepartmentValidator, departmentController.updateDepartmentById);


module.exports = router;