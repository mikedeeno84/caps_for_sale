app.factory('HatFactory', function($http){
	var factory = {		
	};
	factory.getAllHats = function(){
		return $http.get('/api/hats').then(function(response){
			return response.data;
		}).then(null, next);
	}
	factory.getOneHat = function(hatId){
		return $http.get('/api/hats/' + hatId).then(function(response){
			return response.data;
		}).then(null, next);
	}
	factory.deleteHat = function(hatId){
		return $http.deleteHat('/api/hats/' + hatId).then(function(response){
			return response.data;
		}).then(null, next);
	}	
	return factory
})
//of course i'm jamaican! why else would I be wearing this hat?