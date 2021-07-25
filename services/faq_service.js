const faqDataProvider = require('../providers/faq_dataprovider');

let FaqService = {

  getFaqs: async(dbKey) => {
    let faqs = await faqDataProvider.getFaqs(dbKey);
    return faqs;
  },
  createFaq: async(body, dbKey) => {
    let faq = await faqDataProvider.createFaq(body, dbKey);
    return faq;
  },
  deleteFaq: async(faqId, dbKey) => {
    let faq = await faqDataProvider.deleteFaq(faqId, dbKey);
    return faq;
  }

};

module.exports = FaqService;
