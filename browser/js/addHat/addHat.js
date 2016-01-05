app.config(function($stateProvider){
	$stateProvider.state('addHat',{
		url: '/addHat',
		templateUrl: 'js/addHat/addHat.html',
		controller: 'addHatController'
	})
})

app.controller('addHatController',function($scope,HatFactory,$state){
	$scope.hatForm;
	$scope.formSubmit = function(data){
		HatFactory.addHat(data)
		.then(function(newHat){
			console.log('Hat: ',newHat)
			$state.go('home')
		})
		console.log(data)
	}
})