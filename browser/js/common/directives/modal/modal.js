
app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, hat, user) {

  $scope.hat = hat;
  $scope.user = user;
  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

app.controller('ModalCtrl', function ($scope) {

  });