let router = require('express').Router({mergeParams: true});
module.exports = router;
let mongoose = require('mongoose');
let Review = mongoose.model('Review');

// CRUD
// CREATE
// READ Many and READ One
// UPDATE
// DELETE

// CREATE a review
router.post('/', function(req, res, next) {
  var review = new Review(req.body);
  review.save()
    .then(function(review) {
      return res.json(review);
    })
    .then(null, next);
});

// READ all
router.get('/', function(req, res, next) {
  Review.find({})
    .then(function(reviews) {
      console.log('this is where i am');
      console.log(reviews);
      return res.json(reviews)
    })
    .then(null, next);
});

// READ one
router.get('/:id', function(req, res, next) {
  Review.findOne({ _id : req.params.id })
    .then(function(reviews) {
      return res.json(reviews)
    })
    .then(null, next);
});

// UPDATE a review
// Needs to be tested
router.put('/:id', function(req, res, next) {
  Review.findOne({ _id : req.params.id })
    .then(function(review) {
      return res.json(review.update(req.body).save());
    })
    .then(null, next);
});


// DELETE a review
router.delete('/:id', function(req, res, next) {
  Review.findOneAndRemove({ _id : req.params.id })
    .then(function(deletedReview) {
      return res.json(deletedReview);
    })
    .then(null, next);
});

