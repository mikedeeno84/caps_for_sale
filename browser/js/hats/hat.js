app.config(function($stateProvider) {
  $stateProvider.state("hats", {
    url : '/hats',
    controller : 'HatController',
    templateUrl : 'js/hats/hat.html',
    resolve : {
      hats: function(HatFactory){
          return HatFactory.getAllHats()
      }
    }
  })
});

app.controller('HatController', function($scope, hats) {
  // mock hat data
  // format is most likely wrong too
  $scope.hats = hats


})
