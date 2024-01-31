const users = require('../models/users');

const getAllMembers = (req, res) => {
    res.json(users);
  };

module.exports = { 
    getAllMembers,
}