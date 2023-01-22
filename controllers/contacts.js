const client = require('../model/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
    const  db = await client.getDb().db('cse341');
    const collection = db.collection('contacts')
    const cursor = collection.find();
    const documents = await cursor.toArray();
    res.status(200).json(documents);
  };

  const getOne = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const  db = await client.getDb().db('cse341');
    const collection = db.collection('contacts');
    const cursor = collection.find({ _id: userId });
    const document = await cursor.toArray(); 
    res.status(200).json(document);
  };

  const createContact = async(req, res, next) => {
    const contact = req.body;
    const  db = await client.getDb().db('cse341');
    const collection = db.collection('contacts');
    collection.insert(req.body, (error, result) => {
      if (error) {
        return response.status(500).send(error);
      }
      response.send(result.result);
    })
  }

  module.exports = { getAll, getOne, createContact };