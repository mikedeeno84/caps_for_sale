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
      body : 'Wow. I love this hat!'
    },
    {
      user: mongoose.Types.ObjectId(),
      hat : mongoose.Types.ObjectId(),
      rating : '3',
      body : 'This hat is awesome. I have so much fun wearing it. I have not cleaned it since purchase.'
      //reviews : ''n
    },
    {
      user: mongoose.Types.ObjectId(),
      hat : mongoose.Types.ObjectId(),
      rating : '2',
      body : 'I just love hats and this website is great for my hat buying addiction.'
      //reviews : ''
    },
    {
      user: mongoose.Types.ObjectId(),
      hat : mongoose.Types.ObjectId(),
      rating : '2',
      body : 'Woah. I went ice skating with this hat and I received tons of compliments'
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

