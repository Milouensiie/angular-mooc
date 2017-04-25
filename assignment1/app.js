(function () {
  'use strinct';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject= ['$scope'];
  function LunchCheckController($scope) {
    $scope.message="";
    $scope.menu="";
    $scope.check = function () {
      if ($scope.menu == "") {
        $scope.message = "Empty";
      }
      else { if ($scope.menu.split(",").length <= 3) {
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Too much!";
      }}
    };
  };

})();
