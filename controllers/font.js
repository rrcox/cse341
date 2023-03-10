const client = require('../model/connect');
const ObjectId = require('mongodb').ObjectId;

const getFonts = async (req, res) => {
    // #swagger.tags = ['Settings/Font']
    // #swagger.description = 'Gets fonts listed in an array of font IDs.'

    // code goes here
};

const createFont = async(req, res) => {
    // #swagger.tags = ['Settings/Font']
    // #swagger.description = 'Creates a font. Accessible only by admin user.'

    // code goes here
}

const updateFont = async (req, res) => {
    // #swagger.tags = ['Settings/Font']
    // #swagger.description = 'Updates a font.  Accessible only by admin user.'

    // code goes here
};

const deleteFonts = async (req, res) => {
    // #swagger.tags = ['Settings/Font']
    // #swagger.description = 'Deletes fonts listed in an array of font IDs.  Accessible only by admin user.'

    // code goes here
};
 
module.exports = { getFonts, createFont, updateFont, deleteFonts };
