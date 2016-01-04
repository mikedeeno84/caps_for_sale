var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var Review = Promise.promisifyAll(mongoose.model('Review'));
var User = mongoose.model('User');
var Hat = mongoose.model('Hat');


var seedReviews = function() {
  var reviews = [
    {
      user: mongoose.Types.ObjectId(),
      hat : mongoose.Types.ObjectId(),
      rating : 4,
      body : 'this is a review for the berets'
    },
    {
      user: mongoose.Types.ObjectId(),
      hat : mongoose.Types.ObjectId(),
      rating : '3',
      body : 'this is a review for the breton'
      //reviews : ''
    },
    {
      user: mongoose.Types.ObjectId(),
      hat : mongoose.Types.ObjectId(),
      rating : '2',
      body : 'this is a review for the bowler'
      //reviews : ''
    }
  ]

  return Review.createAsync(reviews);
};


connectToDb.then(function () {
  Review.findAsync({}).then(function (reviews) {
    if (reviews.length === 0) {
      return seedReviews();
    } else {
      console.log(chalk.magenta('Seems to already be user data, exiting!'));
      process.kill(0);
    }
  }).then(function () {
    console.log(chalk.green('Seed successful!'));
    process.kill(0);
  }).catch(function (err) {
    console.error(err);
    process.kill(1);
  });
});

