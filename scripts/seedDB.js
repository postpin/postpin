const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/postpin");


const userSeed = [
  {
    firstName: "Stephen",
    lastName: "King",
    userName: "hello",
    email: "test@test.com",
    profilePhoto: "hello.jpg",
    userCreated: new Date(Date.now())
  },
  {
    firstName: "Jay",
    lastName: "Kay",
    userName: "bye12",
    email: "test1@test.com",
    profilePhoto: "hello.jpg",
    userCreated: new Date(Date.now())
  },
  {
    firstName: "Kay",
    lastName: "manhey",
    userName: "hello",
    email: "test2@test.com",
    profilePhoto: "hello.jpg",
    userCreated: new Date(Date.now())
  },

];

const postSeed = [
  {
    title: "test title",
    body: "King King King King King King",
    cardImage: "tetest.jpg",
    isAnonymous: true,
    postCreated: new Date(Date.now()),
    likeTotal: 11,
    commentTotal: 42,
    clickTotal: 65
  },
  {
    title: "test 2",
    body: "King King King King King King",
    cardImage: "tetest.jpg",
    isAnonymous: true,
    postCreated: new Date(Date.now()),
    likeTotal: 22,
    commentTotal: 42,
    clickTotal: 34
  },
  {
    title: "test 3",
    body: "King King King King King King 3",
    cardImage: "tetest.jpg",
    isAnonymous: true,
    postCreated: new Date(Date.now()),
    likeTotal: 33,
    commentTotal: 34,
    clickTotal: 76
  }

];

const commentSeed = [
  {
    body: "comment test 1",
    commentCreated: new Date(Date.now()),
  },
  {
    body: "comment test 2",
    commentCreated: new Date(Date.now()),
  },
  {
    body: "comment test 3",
    commentCreated: new Date(Date.now()),
  },
  {
    body: "comment test 4",
    commentCreated: new Date(Date.now()),
  },
  {
    body: "comment test 5",
    commentCreated: new Date(Date.now()),
  }
];






db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


db.Post
  .remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


db.Comment
  .remove({})
  .then(() => db.Comment.collection.insertMany(commentSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });