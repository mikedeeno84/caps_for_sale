app.config(function($stateProvider){
	$stateProvider.state('hat',{
		url: '/hat/:hatId',
		templateUrl: 'js/singlehat/singlehat.html',
		resolve: {
			hat: function(HatFactory, $stateParams){
				return HatFactory.getOneHat($stateParams.hatId)
			}
		},
		controller: function($scope, hat, $uibModal, $log){
			$scope.hat = hat;
			$scope.showModal = false;
		    $scope.open = function () {

		      var modalInstance = $uibModal.open({
		        animation: $scope.animationsEnabled,
		        templateUrl: '/js/common/directives/modal/modal.html',
		        controller: 'ModalInstanceCtrl',
		        resolve: {
		          items: function () {
		            return $scope.items;
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