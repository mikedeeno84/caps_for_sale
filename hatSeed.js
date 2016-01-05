'use strict';
var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var Hat = Promise.promisifyAll(mongoose.model('Hat'));
// review seed file should have been run at this point
var Review = mongoose.model('Review');

var getRandomFromArray = function (arr) {
  let res = arr[Math.floor(Math.random() * arr.length)];
  return res;
}

var generateReviews = function(reviews) {
  var newReviews = [];
  for (var i = 0; i < 5; i++) {
    let randomGeneratedReview = getRandomFromArray(reviews);
    newReviews.push(new Review(randomGeneratedReview));
  }
  return newReviews;
}

var seedHats = () => {
  return Review.find({}).then(function(reviews){
    return reviews;
  })
  .then(function(reviews){
    console.log(reviews);
    var hats = [
      {
        name: 'Berets',
        image : '/img/beret.jpg',
        occasions : ['summer'],
        formality : '4',
        reviews : generateReviews(reviews)
      },
      {
        name: 'Breton Caps',
        image : '/img/breton.jpg',
        occasions : ['summer', 'fall'],
        formality : '3',
        reviews : generateReviews(reviews)
      },
      {
        name: 'Bowler Hats',
        image : '/img/bowler.jpg',
        occasions : ['errday', 'classyday'],
        formality : '2',
        reviews : generateReviews(reviews)
      },
      {
        name: 'Brixton',
        image : '/img/breton.jpg',
        occasions : ['fall', 'winter'],
        formality : '3',
        reviews : generateReviews(reviews)
      },
      {
        name: 'Beanie',
        image : '/img/beanie.jpg',
        occasions : ['winter', 'fall'],
        formality : '2',
        reviews : generateReviews(reviews)
      },
      {
        name: 'Boater',
        image : '/img/boater.jpg',
        occasions : ['errday', 'class'],
        formality : '2',
        reviews : generateReviews(reviews)
      },
      {
        name: 'Cowboy Hats',
        image : '/img/cowboy.jpg',
        occasions : ['whenever'],
        formality : '3',
        reviews : generateReviews(reviews)
      },
      {
        name: 'Deerstalker Hats',
        image : '/img/deerstalker.jpg',
        occasions : ['solving crimes'],
        formality : '4',
        reviews : generateReviews(reviews)
      },
      {
        name: 'Fez Hats',
        image : '/img/fez.jpg',
        occasions : ['Alladin-theme events', 'Broadway'],
        formality : '2',
        reviews : generateReviews(reviews)
      },
      {
        name: 'Fisherman Caps',
        image : '/img/fisherman.jpg',
        occasions : ['searching for moby', 'dancing on roof'],
        formality : '2',
        reviews : generateReviews(reviews)
      },
      {
        name: 'Ganster Hats',
        image : '/img/ganster.jpg',
        occasions : ['feeling swag'],
        formality : '2',
        reviews : generateReviews(reviews)
      }
    ]

    return Hat.createAsync(hats);
  })
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
