app.config(function($stateProvider) {
  $stateProvider.state("reviews", {
    url : '/reviews',
    controller : 'ReviewController',
    templateUrl : 'js/reviews/review.html',
    resolve : {
      allhats : function(ReviewFactory, HatFactory) {
        //return ReviewFactory.getReviews();
        return HatFactory.getAllHats();
      }
    }
  });
});

app.controller("ReviewController", function($scope, $stateParams, allhats) {
  $scope.hats = allhats;
  $scope.hatId = $stateParams._id;
});
