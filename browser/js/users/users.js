app.config(function($stateProvider) {
    $stateProvider.state('users', {
        url: '/users',
        templateUrl: 'js/users/users.html',
        controller: 'UserController',
        resolve: {
            users: function(UserFactory) {
                return UserFactory.getUsers();
            }
        }
    })
});

app.config(function($stateProvider) {
    $stateProvider.state('profile', {
        url: '/user/:userId',
        templateUrl: 'js/users/profile.html',
        controller: 'ProfileController',
        resolve: {
            profile: function($stateParams, UserFactory) {
                console.log("State Params: ", $stateParams)
                return UserFactory.getProfile($stateParams.userId);
            }
        }
    });
});

app.controller('UserController', function($scope, UserFactory, users) {

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

app.controller('ProfileController', function($scope, UserFactory, profile) {
    $scope.profile = profile;
    $scope.bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus tellus eu malesuada sagittis. In eleifend dignissim tristique. In accumsan magna eu venenatis egestas. Aenean eu pretium neque. Cras fringilla lorem et tincidunt pulvinar. Mauris vel neque ac libero bibendum malesuada. Vivamus vitae maximus tortor, sodales accumsan ipsum. Fusce suscipit, eros sit amet efficitur scelerisque, turpis diam suscipit felis, gravida fermentum lorem nulla quis sem. Integer in libero dictum, feugiat tellus feugiat, iaculis risus. Nulla porta nulla eu augue venenatis, sit amet congue nulla viverra. Donec accumsan hendrerit nisi, at semper dolor feugiat non. Donec luctus ante a lacus feugiat accumsan. Morbi accumsan nisi non magna ornare, non luctus tortor congue."
    
})
