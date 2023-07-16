const express = require('express');
const router = express.Router();
const {getAllEvents, 
    getEventById, 
    updateEventById, 
    deleteEventById, 
    createNewEvent
} = require('../controllers/events')

  
router.route('/').get(getAllEvents).post(createNewEvent);
router.route('/:id').get(getEventById).patch(updateEventById).delete(deleteEventById);

module.exports = router;