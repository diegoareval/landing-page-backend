const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact_controller');

router.get('/', function (request, response, next) {
    contactController.getContacts(request, response, next);
});


router.post('/', function (request, response, next) {
    contactController.createContact(request, response, next);
});


router.put('/:contactId', function (request, response, next) {
    contactController.updateContact(request, response, next);
});

module.exports = router;
