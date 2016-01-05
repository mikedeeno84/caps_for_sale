app.factory('HatFactory', function($http){
	var factory = {		
	};
	factory.getAllHats = function(){
		return $http.get('/api/hats').then(function(response){
			return response.data;
		}).then(null, console.log);
	}
	factory.getOneHat = function(hatId){
		return $http.get('/api/hats/' + hatId).then(function(response){
			return response.data;
		}).then(null, console.log);
	}
	factory.deleteHat = function(hatId){
		return $http.deleteHat('/api/hats/' + hatId).then(function(response){
			return response.data;
		}).then(null, console.log);
	}
	factory.addHat = function(newHatObj){
		return $http.post('/api/hats/',newHatObj)
				.then(function(response){
					return response
				})
	}	
	return factory;
})
//of course i'm jamaican! why else would I be wearing this hat?