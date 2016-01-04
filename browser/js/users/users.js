app.config(function($stateProvider){
	$stateProvider.state('users',{
		url: '/users',
		templateUrl: 'js/users/users.html',
		controller: 'UserController',
		resolve: {
			users: function(UserFactory){
				return UserFactory.getUsers(); 
			}
		}
	});
});

app.controller('UserController',function($scope,UserFactory,users){
	
	$scope.users = users;

	// activate();

	// function activate() {
	// 	return UserFactory.getUsers()
	// 		.then(function(data){
	// 			$scope.users = data;
	// 			return $scope.users;
	// 		})
	// }
})
