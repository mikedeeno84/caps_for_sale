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
		},

    submitCoveted : function(user, hat) {
      return $http({
        method : 'PUT',
        url : '/api/user',
        data : {user : user, hat:  hat, type : 'covet' }
      }).then(function(res) {
        return res.data;
      });
    },

    submitOwned : function(user, hat) {
      return $http({
        method : 'PUT',
        url : '/api/user',
        data : {user : user, hat:  hat, type : 'owned' }
      }).then(function(res) {
        return res.data;
      });
    }
	}
})
