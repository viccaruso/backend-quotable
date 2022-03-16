const pool = require('../utils/pool');

module.exports = class Profile {
  // Declare properties of Profile object
  id;
  name;
  quote;

  // Constructor sets the initial values of properties
  // for each new Profile object at time of creation
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.quote = row.quote;
  }

  // Static method for inserting values into SQL db
  // When invoked it takes in an object, 
  // destructures the name and quote properties from that object, 
  // and finally returns a new Profile instance
  // (use by in ProfileService in this assignment)
  static async insert({ name, quote }) {
    const { rows } = await pool.query(`
    INSERT INTO
      profiles (name, quote)
    VALUES
      ($1, $2)
    RETURNING
      *
    `, [name, quote]); 

    return new Profile(rows[0]);
  }
};
