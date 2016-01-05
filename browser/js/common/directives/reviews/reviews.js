app.directive('reviews', function($rootScope) {
  return {
    restrict : 'E',
    scope : {
      review: '='
    },
    templateUrl : 'js/common/directives/reviews/reviews.html',
    link : function(scope) {

    }
  }
});
