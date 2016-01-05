app.directive('hatItem', function () {
	return {
		restrict: 'E',
		templateUrl: 'js/common/directives/hatitem/hatitem.html',
		scope: { hat: "=" }
	}
})