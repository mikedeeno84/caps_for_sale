app.config(function($stateProvider) {
  $stateProvider.state("reviews", {
    url : '/reviews',
    controller : 'ReviewController',
    templateUrl : 'js/reviews/review.html',
    resolve : {
      reviews : (ReviewFactory) => {
        return ReviewFactory.getReviews()
          .then(reviews => reviews.data);
      }
    }
  });
});

app.controller("ReviewController", function($scope, reviews) {
  $scope.reviews = reviews;
});
