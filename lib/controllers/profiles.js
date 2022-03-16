const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router()

  .post('/', async (req, res, next) => {
    res.send('Hello from POST!');
  })

  .get('/', async (req, res, next) => {
    res.send('Hello from GET!');
  });
