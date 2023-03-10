const client = require('../model/connect');
const ObjectId = require('mongodb').ObjectId;

const getColors = async (req, res) => {
    // #swagger.tags = ['Settings/Color']
    // #swagger.description = 'Gets colors listed in an array of color IDs.'

    // code goes here
};

const createColor = async(req, res) => {
    // #swagger.tags = ['Settings/Color']
    // #swagger.description = 'Creates a color. Accessible only by admin user.'

    // code goes here
}

const updateColor = async (req, res) => {
    // #swagger.tags = ['Settings/Color']
    // #swagger.description = 'Updates a color.  Accessible only by admin user.'

    // code goes here
};

const deleteColors = async (req, res) => {
    // #swagger.tags = ['Settings/Color']
    // #swagger.description = 'Deletes colors listed in an array of color IDs.  Accessible only by admin user.'

    // code goes here
};

module.exports = { getColors, createColor, updateColor, deleteColors };
