const contactService = require('../services/contact_service');
const responder = require('../utils/responder');
const {dbKey} = require('../utils/constants')
let FaqController = {

  getContacts: async (_, response, next) => {
    try {
      let contacts = await contactService.getContacts(dbKey);
      responder.sendResponse(response, 200, "success", contacts, "Contacts retrieved successfully.");
    } catch (error) {
      return next(error);
    }
  },

  createContact: async (request, response, next) => {
    try {
      let body = request.body;
      let contact = await contactService.createContact(body, dbKey);
      responder.sendResponse(response, 200, "success", contact, "Contact created successfully.");
    } catch (error) {
      return next(error);
    }
  },


  updateContact: async (request, response, next) => {
    try {
      let contactId = request.params.contactId;
      let body = request.body;
      let contact = await contactService.updateContact(body, dbKey, contactId);
      responder.sendResponse(response, 200, "success", contact, "Contact updated successfully.");
    } catch (error) {
      return next(error);
    }
  }

};

module.exports = FaqController;
