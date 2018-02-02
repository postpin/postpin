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
    imageID: "jhgjhgj",
    image: "tetest.jpg",
    postCreated: new Date(Date.now()),
    commentTotal: 42
  },
  {
    title: "test 2",
    imageID: "ghjgjhgj",
    image: "tetest.jpg",
    postCreated: new Date(Date.now()),
    commentTotal: 42
  },
  {
    title: "test 3",
    imageID: "hkhkjhk",
    cardImage: "tetest.jpg",
    postCreated: new Date(Date.now()),
    commentTotal: 34
  }
];

const commentSeed = [
  {
    body: "comment test 1",
    likeTotal: 11,
    userName: "ABC",
    commentCreated: new Date(Date.now()),
  },
  {
    body: "comment test 2",
    likeTotal: 22,
    userName: "ABC",
    commentCreated: new Date(Date.now()),
  },
  {
    body: "comment test 3",
    likeTotal: 35,
    userName: "ABC",
    commentCreated: new Date(Date.now()),
  },
  {
    body: "comment test 4",
    likeTotal: 39,
    userName: "ABC",
    commentCreated: new Date(Date.now()),
  },
  {
    body: "comment test 5",
    likeTotal: 43,
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