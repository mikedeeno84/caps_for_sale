app.config(function($stateProvider) {
  $stateProvider.state("reviews", {
    url : '/reviews',
    controller : 'ReviewController',
    templateUrl : 'js/reviews/review.html',
    resolve : {
      allreviews : function(ReviewFactory) {
        return ReviewFactory.getReviews();
      },
      specificreviews : function(ReviewFactory,$stateParams) {
        //return ReviewFactory.getSpecificReviews($stateParams._id);
        return "";
      }
    }
  });
});

app.controller("ReviewController", function($scope, $stateParams, allreviews,specificreviews) {
  $scope.reviews = allreviews;
  $scope.specificreviews = specificreviews;
  $scope.hatId = $stateParams._id;
});
