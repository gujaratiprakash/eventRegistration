const express = require('express');
const eventController = require('../controllers/eventController');
const eventValidator = require('../validators/eventValidator');

const router = express.Router();

router.post('/store', eventValidator.createEventValidator, eventController.createEvent);
router.get('/getall', eventController.getEvents);
router.get('/:id', eventController.getEventById);
router.delete('/:id', eventController.deleteEventById);
router.put('/:id', eventValidator.createEventValidator, eventController.updateEventById);


module.exports = router;