const { Post } = require('../models');

const postData = 
[
    {
      "title": "Reasons I love potatoes",
      "body": "Boil 'em, mash 'em, stick 'em in a stew... Lovely big golden chips with a nice piece of fried fish.",
      "date_created": "May 14, 2001",
      "userID": 1
    },
    {
      "title": "Tarot",
      "body": "How to read a deck.",
      "date_created": "September 14, 2019",
      "userID": 2
    },
    {
      "title": "Bush",
      "body": "Bush are an English rock band formed in London in 1992. Their current lineup consists of lead vocalist and rhythm guitarist Gavin Rossdale, lead guitarist Chris Traynor, bassist Corey Britz, and drummer Nik Hughes.",
      "date_created": "July 8, 2009",
      "userID": 3
    },
    {
      "title": "LEPARTY",
      "body": "On this date fall starts and Lindsey turns 33.",
      "date_created": "September 22, 2022",
      "userID": 4
    },
    {
      "title": "Life",
      "body": "Life is what it is this project hower is draining and a pain in my tush.",
      "date_created": "August 4, 2020",
      "userID": 5
    },
    {
      "title": "Reasons why",
      "body": "Things and such.",
      "date_created": "October 30, 2020",
      "userID": 6
    }
  ]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;  