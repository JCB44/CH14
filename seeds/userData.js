const { User } = require('../models');

const userData = 
  [
    {
        "username": "Sal",
        "email": "sal@hotmail.com",
        "password": "password12345"
      },
      {
        "username": "Lernantino",
        "email": "lernantino@gmail.com",
        "password": "password12345"
      },
      {
        "username": "Amiko",
        "email": "amiko2k20@aol.com",
        "password": "password12345"
      },
      {
        "username": "chipchap200",
        "email": "chippy@hotmail.com",
        "password": "password12345"
      },
      {
        "username": "teddyRoosevelt",
        "email": "teddyboy@gmail.com",
        "password": "password12345"
      },
      {
        "username": "alexanderHamilton",
        "email": "history@aol.com",
        "password": "password12345"
      }
  ]
  
  // seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!
  const seedUsers = () => User.bulkCreate(userData);
  
  module.exports = seedUsers;