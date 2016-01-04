app.config(function($stateProvider){
	$stateProvider.state('users',{
		url: '/users',
		templateUrl: 'js/users/users.html',
		controller: 'UserController'
	});
});

app.controller('UserController',function($scope,UserFactory){
	$scope.users;

	activate();

	function activate() {
		return UserFactory.getUsers()
			.then(function(data){
				$scope.users = data;
				return $scope.users;
			})
	}
})
