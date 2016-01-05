app.config(function($stateProvider){
	$stateProvider.state('hat',{
		url: '/hat/:hatId',
		templateUrl: 'js/singlehat/singlehat.html',
		resolve: {
			hat: function(HatFactory, $stateParams){
				return HatFactory.getOneHat($stateParams.hatId)
			}
		},
		controller: function(HatFactory, hat){
			$scope.hat = hat;
		}
	})
})