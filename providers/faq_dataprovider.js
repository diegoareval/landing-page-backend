const dbRepo = require('../models');

let FaqDataProvider = {

  getFaqs: async(dbKey) => {
    const Faq = dbRepo[dbKey].Faq;
    return new Promise(function(resolve, reject) {
      Faq.findAll()
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },

  createFaq: async(body, dbKey) => {
    const Faq = dbRepo[dbKey].Faq;
    return new Promise(function(resolve, reject) {
      Faq.create(body)
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },
  deleteFaq: async(faqId, dbKey) => {
    const Faq = dbRepo[dbKey].Faq;
    return new Promise(function(resolve, reject) {
      Faq.destroy({ where: { id: faqId } })
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  }

};

module.exports = FaqDataProvider;
