app.directive('addreview',function(ReviewFactory){
	return{
		restrict: 'E',
		templateUrl: 'js/common/directives/addreview/addreview.html',
  }
})




app.controller("reviewController", function($scope, ReviewFactory){

			$scope.hatreview = {};
			$scope.hatreview.hat = $scope.hat._id;
			$scope.hatreview.user = $scope.user._id
            console.log($scope.hatreview)
			$scope.formsubmit = function(review){
				review.rating = parseInt(review.rating);
				// console.log(review);
				ReviewFactory.create(review)
					.then(function(review){
						$scope.hat.reviews.push(review)
					}).then(null, console.log);
				$scope.ok();
			}
})
