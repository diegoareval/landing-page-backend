const faqService = require('../services/faq_service');
const responder = require('../utils/responder');
let dbKey = 'default';
let FaqController = {

  getFaqs: async (request, response, next) => {
    try {
      let faqs = await faqService.getFaqs(dbKey);
      responder.sendResponse(response, 200, "success", faqs, "Faqs retrieved successfully.");
    } catch (error) {
      return next(error);
    }
  },

  createFaq: async (request, response, next) => {
    try {
      let body = request.body;
      let faq = await faqService.createFaq(body, dbKey);
      responder.sendResponse(response, 200, "success", faq, "Faq created successfully.");
    } catch (error) {
      return next(error);
    }
  },


  deleteFaq: async (request, response, next) => {
    try {
      let faqId = request.params.faqId;
      let faq = await faqService.deleteFaq(faqId, dbKey);
      responder.sendResponse(response, 200, "success", faq, "Faq deleted successfully.");
    } catch (error) {
      return next(error);
    }
  }

};

module.exports = FaqController;
