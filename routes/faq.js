const express = require('express');
const router = express.Router();
const faqController = require('../controllers/faq_controller');

router.get('/', function (request, response, next) {
    faqController.getFaqs(request, response, next);
});


router.post('/', function (request, response, next) {
    faqController.createFaq(request, response, next);
});


router.delete('/:faqId', function (request, response, next) {
    faqController.deleteFaq(request, response, next);
});

module.exports = router;
