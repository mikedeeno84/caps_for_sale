app.factory('UserFactory',function($http){
	
	var users;

	return {
		getUsers: function(){
			return $http({
				method: 'GET',
				url: '/api/user'
			}).then(function(res){
				console.log(res.data)
				users = res.data;
				return res.data
			})
		}
	}
})