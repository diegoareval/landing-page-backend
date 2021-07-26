const contactDataProvider = require('../providers/contact_dataprovider');

let ContactService = {

  getContacts: async(dbKey) => {
    let contacts = await contactDataProvider.getContacts(dbKey);
    return contacts;
  },
  createContact: async(body, dbKey) => {
    let contact = await contactDataProvider.createContact(body, dbKey);
    return contact;
  },
  updateContact: async(body, dbKey, contactId) => {
    let contact = await contactDataProvider.updateContact(body, dbKey, contactId);
    return contact;
  }

};

module.exports = ContactService;
