const express = require('express');
const participatesController = require('../controllers/participatesController');

const router = express.Router();

router.post('/store', participatesController.createParticipates);
router.get('/getall', participatesController.getParticipates);
router.get('/:id', participatesController.getParticipatesById);

module.exports = router;