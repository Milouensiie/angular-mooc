(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['categories'];
  function CategoriesController(categories) {
    var catCtrl = this;
    catCtrl.items = categories.data;
    catCtrl.getShortName = function (index) {
      return catCtrl.items[index].short_name;
    }
    catCtrl.getId = function (index) {
      return catCtrl.items[index].id;
    }
  }

})();
