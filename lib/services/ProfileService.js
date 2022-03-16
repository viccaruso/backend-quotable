const fetch = require('cross-fetch');
const Profile = require('../models/Profile');

module.exports = class ProfileService {
  static async create({ name }) {
    // Fetch a random Futurama quote from the API
    const response = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
    // Convert response into JSON 
    const data = await response.json();

    // Create Profile object instance (constructed with a name and quote)
    const profile = await Profile.insert({
      name, // <- name property from req.body when service is called in the controller
      quote: data[0].quote // <- response from API in JSON format containing a quote property
    });

    // Return the new Profile instance 
    return profile;
  }
};
