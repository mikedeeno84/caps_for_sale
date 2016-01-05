var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var Review = Promise.promisifyAll(mongoose.model('Review'));
var User = mongoose.model('User');
var Hat = mongoose.model('Hat');

var userResponses = [
  'Wow. I love this hat!',
  'This hat is awesome. I have so much fun wearing it. I have not cleaned it since purchase.',
  'I just love hats and this website is great for my hat buying addiction.',
  'Woah. I went ice skating with this hat and I received tons of compliments',
  'I think Im in love with a hat.',
  'delivery was quick',
  'when the hat didnt fit, the owners Deeno, John, and Vic were quick to fix the problem',
  'All the hats I will ever want in one place',
  'My goal is to have a new hat for every single day of a year',
  'My hat closet is looking great'
];

var getRandomFromArray = function (arr) {
  var res = arr[Math.floor(Math.random() * arr.length)];
  return res;
}



var seedReviews = function() {
  var reviews = [
    {
      user: mongoose.Types.ObjectId(),
      hat : mongoose.Types.ObjectId(),
      rating : 4,
      body : getRandomFromArray(userResponses)
    },
    {
      user: mongoose.Types.ObjectId(),
      hat : mongoose.Types.ObjectId(),
      rating : '3',
      body : getRandomFromArray(userResponses)
      //reviews : ''n
    },
    {
      user: mongoose.Types.ObjectId(),
      hat : mongoose.Types.ObjectId(),
      rating : '2',
      body : getRandomFromArray(userResponses)
      //reviews : ''
    },
    {
      user: mongoose.Types.ObjectId(),
      hat : mongoose.Types.ObjectId(),
      rating : '2',
      body : getRandomFromArray(userResponses)
      //reviews : ''
    },
    {
      user: mongoose.Types.ObjectId(),
      hat : mongoose.Types.ObjectId(),
      rating : 4,
      body : getRandomFromArray(userResponses)
    },
    {
      user: mongoose.Types.ObjectId(),
      hat : mongoose.Types.ObjectId(),
      rating : '3',
      body : getRandomFromArray(userResponses)
      //reviews : ''n
    },
    {
      user: mongoose.Types.ObjectId(),
      hat : mongoose.Types.ObjectId(),
      rating : '2',
      body : getRandomFromArray(userResponses)
      //reviews : ''
    },
    {
      user: mongoose.Types.ObjectId(),
      hat : mongoose.Types.ObjectId(),
      rating : '2',
      body : getRandomFromArray(userResponses)
      //reviews : ''
    },
    {
      user: mongoose.Types.ObjectId(),
      hat : mongoose.Types.ObjectId(),
      rating : 4,
      body : getRandomFromArray(userResponses)
    },
    {
      user: mongoose.Types.ObjectId(),
      hat : mongoose.Types.ObjectId(),
      rating : '3',
      body : getRandomFromArray(userResponses)
      //reviews : ''n
    },
    {
      user: mongoose.Types.ObjectId(),
      hat : mongoose.Types.ObjectId(),
      rating : '2',
      body : getRandomFromArray(userResponses)
      //reviews : ''
    },
    {
      user: mongoose.Types.ObjectId(),
      hat : mongoose.Types.ObjectId(),
      rating : '2',
      body : getRandomFromArray(userResponses)
      //reviews : ''
    }
  ];
  console.log(reviews);
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

