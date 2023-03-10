const client = require('../model/connect');
const ObjectId = require('mongodb').ObjectId;

const getTopics = async (req, res) => {
    // #swagger.tags = ['Settings/Topic']
    // #swagger.description = 'Gets topics listed in an array of topic IDs.'

    // code goes here
};

const createTopic = async(req, res) => {
    // #swagger.tags = ['Settings/Topic']
    // #swagger.description = 'Creates a topic. Accessible only by admin user.'

    // code goes here
}

const updateTopic = async (req, res) => {
    // #swagger.tags = ['Settings/Topic']
    // #swagger.description = 'Updates a topic.  Accessible only by admin user.'

    // code goes here
};

const deleteTopics = async (req, res) => {
    // #swagger.tags = ['Settings/Topic']
    // #swagger.description = 'Deletes topics listed in an array of topic IDs.  Accessible only by admin user.'

    // code goes here
};
 
module.exports = { getTopics, createTopic, updateTopic, deleteTopics };
