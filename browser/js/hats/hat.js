app.config(function($stateProvider) {
  $stateProvider.state("hats", {
    url : '/hats',
    controller : 'HatController',
    templateUrl : 'js/hats/hat.html',
    resolve : {

    }
  })
});

app.controller('HatController', function($scope) {
  // mock hat data
  // format is most likely wrong too
  $scope.hats = [
    {  "_id": "568ad24f6b7e17cf8fa885ce",
      "name": "Berets",
      "image": "",
      "formality": "4",
      "reviews": [ ],
      "occasions": [
        "summer"
      ]
    },
    {
      "_id": "568ad24f6b7e17cf8fa885cf",
      "name": "Breton Caps",
      "image": "",
      "formality": "3",
      "reviews": [ ],
      "occasions": [
        ""
      ]
    },
    {
      "_id": "568ad24f6b7e17cf8fa885d0",
      "name": "Bowler Hats",
      "image": "",
      "formality": "2",
      "reviews": [ ],
      "occasions": [
        "errday",
        "class"
      ]
    }
  ]

})
