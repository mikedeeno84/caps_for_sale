app.config(function($stateProvider){
	$stateProvider.state('hat',{
		url: '/hat/:hatId',
		templateUrl: 'js/singlehat/singlehat.html',
		resolve: {
			hat: function(HatFactory, $stateParams){
				return HatFactory.getOneHat($stateParams.hatId)
			}
		},
		controller: function($scope, hat, $uibModal, $log, AuthService){
			$scope.hat = hat;
			$scope.showModal = false;
		    $scope.open = function () {

		      var modalInstance = $uibModal.open({
		        animation: $scope.animationsEnabled,
		        templateUrl: '/js/common/directives/modal/modal.html',
		        controller: 'ModalInstanceCtrl',
		        size: 'lg',
		        resolve: {
		          hat: function () {
		            return $scope.hat;
		          },
		          user: function(){
		          	return AuthService.getLoggedInUser().then(function (user) {
                		return user
               		 });
		          }
		        }
		      });
		    modalInstance.result.then(function (selectedItem) {
		      $scope.selected = selectedItem;
		    }, function () {
		      $log.info('Modal dismissed at: ' + new Date());
		    });
		  };
		}
	})
})