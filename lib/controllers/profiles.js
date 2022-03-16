const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router()
  // POST route 
  .post('/', async (req, res, next) => {
    // send (post) the Profile object that is returned from the service
    // ez pz
    res.send(await ProfileService.create(req.body));
  });
