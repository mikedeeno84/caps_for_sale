var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var Hat = Promise.promisifyAll(mongoose.model('Hat'));
// review seed file should have been run at this point
var Review = mongoose.model('Review');

var seedHats = () => {
  return Review.find({}).then(function(reviews){
    var newReviews = [];
    for (var i = 0; i< reviews.length; i++) {
      newReviews.push(new Review(reviews[i]));
    }
    return newReviews;
  })
  .then(function(reviews){
    console.log(reviews);
    var hats = [
      {
        name: 'Berets',
        image : '',
        occasions : ['summer'],
        formality : '4',
        reviews : reviews
      },
      {
        name: 'Breton Caps',
        image : '',
        occasions : '',
        formality : '3',
        reviews : reviews
      },
      {
        name: 'Bowler Hats',
        image : '',
        occasions : ['errday', 'class'],
        formality : '2',
        reviews : reviews
      }
    ]

    return Hat.createAsync(hats);
  })
  //var hats = [
  //  {
  //    name: 'Berets',
  //    image : '',
  //    occasions : ['summer'],
  //    formality : '4',
  //    reviews : [mongoose.Types.ObjectId()]
  //  },
  //  {
  //    name: 'Breton Caps',
  //    image : '',
  //    occasions : '',
  //    formality : '3',
  //    reviews : [mongoose.Types.ObjectId()]
  //  },
  //  {
  //    name: 'Bowler Hats',
  //    image : '',
  //    occasions : ['errday', 'class'],
  //    formality : '2',
  //    reviews : [mongoose.Types.ObjectId()]
  //  }
  //]
  //
  //return Hat.createAsync(hats);
};

connectToDb.then(function () {
  Hat.findAsync({}).then(function (hats) {
    if (hats.length === 0) {
      console.log("hats length is zero");
      return seedHats();
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
