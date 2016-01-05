app.config(function($stateProvider) {
  $stateProvider.state("reviews", {
    url : '/reviews',
    controller : 'ReviewController',
    templateUrl : 'js/reviews/review.html',
    resolve : {
      reviews : (ReviewFactory) => {
        return ReviewFactory.getReviews()
          .then(reviews => reviews.data);
      },
      specificReviews : ($stateParams, ReviewFactory) => {
        return ReviewFactory.getSpecificReviews($stateParams._id)
          .then(reviews => reviews.data);
      }
    }
  });
});

app.controller("ReviewController", function($scope, $stateParams, reviews, specificReviews) {
  $scope.reviews = reviews;
  $scope.specificReviews = specificReviews;
  $scope.hatId = $stateParams._id;
});
