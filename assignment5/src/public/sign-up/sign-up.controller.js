(function () {

angular.module('common')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$http', 'UserService']
function SignUpController($http, UserService) {
  var signUp = this;
  signUp.user={};
  signUp.user.menufavorite="",

  signUp.submit = function () {
    $http({
      method: "GET",
      url:"https://dry-dusk-78818.herokuapp.com/menu_items/"+signUp.user.menufavorite+".json",
    })
    .then(function(response) {
      UserService.setUser(signUp.user);
      UserService.setFav(response.data);
      signUp.completed = true;
      UserService.setCompleted();
    }, function(response) {
      signUp.nope = true;
    });
  };
}

})();
