app.factory('ReviewFactory', function($http) {
  var o = {};

  o.create =
    (review) => $http({
      url : '/api/reviews',
      method : 'POST',
      data : review
    })

  o.getReviews = () =>
    $http.get('/api/reviews', response => response.body);

  o.getSpecificReviews =  (hatId) =>
    $http.get({
      url : '/api/reviews',
      method : 'GET',
      params : {
        id : hatId
      }
    }).then( response => response.data );

  o.update =
    (reviewId) => $http({
      url : '/api/videos/',
      method : 'PUT',
      data : { id : reviewId }
    }).then( response => response.data );

  o.delete =
    (reviewId) => $http({
      url : '/api/videos/',
      method : 'DELETE',
      data : { id : reviewId }
    }).then( response => response.data );


  return o;
});
