
const { find } = require("./find.js");
const { createInfographic } = require("./createInfographic.js");
const { findOne } = require("./findOne.js");
const createCRUDController = (Model) => {
  return {
    createInfographic: async(req, res) => createInfographic(Model, req, res),
    find: async(req, res) => find(Model, req, res),
    findOne: async(req, res) => findOne(Model, req, res) 
    
  }
}

module.exports = createCRUDController;