const express = require('express');
const categoryController = require('../controllers/categoryController');
const categoryValidator = require('../validators/categoryValidator');

const router = express.Router();

router.post('/store', categoryValidator.createCategoryValidator, categoryController.createCategory);
router.get('/getall', categoryController.getCategorys);
router.get('/:id', categoryController.getCategoryById);
router.delete('/:id', categoryController.deleteCategoryById);
router.put('/:id', categoryValidator.createCategoryValidator, categoryController.updateCategoryById);


module.exports = router;