const dbRepo = require('../models');

let ContactDataProvider = {

  getContacts: async(dbKey) => {
    const Contact = dbRepo[dbKey].Contact;
    return new Promise(function(resolve, reject) {
        Contact.findAll()
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },

  createContact: async(body, dbKey) => {
    const Contact = dbRepo[dbKey].Contact;
    return new Promise(function(resolve, reject) {
        Contact.create(body)
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },
  updateContact: async(body, dbKey, contactId) => {
    const Contact = dbRepo[dbKey].Contact;
    return new Promise(function(resolve, reject) {
        Contact.update(body, { where: { id: contactId } })
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  }

};

module.exports = ContactDataProvider;
