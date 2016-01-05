app.directive('hatItem', function ($rootScope, AuthService, AUTH_EVENTS, $state, UserFactory) {
	return {
		restrict: 'E',
		templateUrl: 'js/common/directives/hatitem/hatitem.html',
		scope: { hat: "=" },
    link : function(scope) {

      scope.updatecovetlist = function () {
        if (scope.isLoggedIn()) {
          return UserFactory.submitCoveted(scope.user, scope.hat);
        }
      };

      scope.markasowned = function () {
        if (scope.isLoggedIn()) {
          return UserFactory.submitOwned(scope.user, scope.hat);
        }
      };


      scope.user = null;

      scope.isLoggedIn = function () {
        return AuthService.isAuthenticated();
      };

      var setUser = function () {
        AuthService.getLoggedInUser().then(function (user) {
          scope.user = user;
        });
      };

      var removeUser = function () {
        scope.user = null;
      };

      setUser();


      $rootScope.$on(AUTH_EVENTS.loginSuccess, setUser);
      $rootScope.$on(AUTH_EVENTS.logoutSuccess, removeUser);
      $rootScope.$on(AUTH_EVENTS.sessionTimeout, removeUser);
    }
	}
});
