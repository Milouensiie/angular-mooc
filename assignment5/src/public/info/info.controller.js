(function () {

angular.module('common')
.controller('InfoController', InfoController);

InfoController.$inject = ['UserService']
function InfoController(UserService) {
  var infCtrl = this;
  infCtrl.reg=UserService.getCompleted();
  infCtrl.user= UserService.getUser();
  infCtrl.fav= UserService.getFav();
  console.log(infCtrl);
}
})();
