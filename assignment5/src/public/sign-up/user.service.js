(function () {
"use strict";

angular.module('public')
.service('UserService', UserService);

function UserService () {
  var service = this;
  var completed = false;
  var fav = {};
  var user = {};
  service.setCompleted = function() {
    completed = true;
  };
  service.setFav = function(item) {
    fav = item;
  }
  service.setUser = function(us) {
    user = us;
  }
  service.getUser = function() {
    return user;
  }
  service.getCompleted = function() {
    return completed;
    console.log(service);
  }
  service.getFav = function() {
    console.log(service);
    return fav;
  }
}
})();
