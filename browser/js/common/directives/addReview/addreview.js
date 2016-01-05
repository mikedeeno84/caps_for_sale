app.directive('addreview',function(ReviewFactory){
	return{
		restrict: 'E',
		templateUrl: 'js/common/directives/addreview/addreview.html',
  }
})

app.controller('ModalCtrl', function ($scope) {

  });


app.controller("reviewController", function($scope, ReviewFactory, AuthService){

			$scope.hatreview = {};
			// $scope.hatreview.hat = $scope.hat._id;
			$scope.setUser = function () {
                AuthService.getLoggedInUser().then(function (user) {
                	console.log(user)
                    // $scope.hatreview.user = user._id;
                });
            }
            $scope.setUser();

            console.log($scope.hatreview)
			$scope.formsubmit = function(review){
				review.rating = parseInt(review.rating);
				// console.log(review);
				ReviewFactory.create(review)
					.then(function(review){
						$scope.hat.reviews.push(review)
					}).then(null, console.log);
			}
})



app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

  // $scope.items = items;
  // $scope.selected = {
  //   item: $scope.items[0]
  // };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

