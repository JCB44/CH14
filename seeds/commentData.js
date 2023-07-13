const { Comment } = require('../models');

const commentData = 
[
    {
      "body": "En’Hedu’Anna (23rd century BCE), Babylonian Empire",
      "date_created": "January 15, 2022",
      "userID": 1,
      "postID": 1
    },
    {
      "body": "Al-ijliya Al-astrulabi (10th century CE), Syria",
      "date_created": "January 15, 2022",
      "userID": 4,
      "postID": 1
    },
    {
      "body": "Carme Adelina Gutiérrez Alonso (1925–2015), Chile",
      "date_created": "June 2, 2022",
      "userID": 3,
      "postID": 1
    },
    {
      "body": "Janaki Ammal (1887–1984), India",
      "date_created": "March 18, 2022",
      "userID": 2,
      "postID": 2
    },
    {
      "body": "Helia Bravos Hollis (1901–2001), México",
      "date_created": "November 1, 2022",
      "userID": 2,
      "postID": 2
    },
    {
      "body": "Luisa Eugenia Navas Bustamante (1918 — ); Chile",
      "date_created": "May 28, 2023",
      "userID": 4,
      "postID": 2
    },
    {
      "body": "Marie Maynard Daly (1921–1993) US, African-American",
      "date_created": "May 30, 2023",
      "userID": 1,
      "postID": 3
    },
    {
      "body": "Ruby Hirose (104–1960). Bacteriology & biochemistry. US, Chinese-American",
      "date_created": "November 1, 2022",
      "userID": 4,
      "postID": 3
    },
    {
      "body": "Alice Augusta Ball (1892–1916); African American",
      "date_created": "May 28, 2023",
      "userID": 2,
      "postID": 3
    },
    {
      "body": "Mary Jackson (1921–1942). NASA engineer, US, African American",
      "date_created": "May 30, 2023",
      "userID": 3,
      "postID": 4
    },
    {
      "body": "Maryam Mirzakhani (1977–2011), Iran",
      "date_created": "November 1, 2022",
      "userID": 3,
      "postID": 4
    },
    {
      "body": "Marjorie Lee Browne (1914–1979), US, African American",
      "date_created": "May 28, 2023",
      "userID": 2,
      "postID": 4
    },
    {
      "body": "May Edward Chin (1896–1980); US, Chickahominy and African American",
      "date_created": "May 30, 2023",
      "userID": 4,
      "postID": 5
    },
    {
      "body": "Đặng Thùy Trâm (1942–1970), Vietnam",
      "date_created": "November 1, 2022",
      "userID": 4,
      "postID": 5
    },
    {
      "body": "Mary Seacole (1805–1881) Army Nurse, US, Jamaican-British",
      "date_created": "May 28, 2023",
      "userID": 1,
      "postID": 5
    },
    {
      "body": "Chien-Shiung Wu (1912–1997), experimental nuclear physics, Chinese-American",
      "date_created": "May 30, 2023",
      "userID": 2,
      "postID": 6
    },
    {
      "body": "Dorothy Vaughan (1910–2008). NASA Computer Scientist, US, African American",
      "date_created": "November 1, 2022",
      "userID": 2,
      "postID": 6
    },
    {
      "body": "Sameera Moussa (1917–1952); nuclear physics, Egyptian",
      "date_created": "July 28, 2023",
      "userID": 3,
      "postID": 6
    }
  ]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;