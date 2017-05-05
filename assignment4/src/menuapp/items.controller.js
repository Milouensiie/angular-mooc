(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items'];
  function ItemsController(items) {
    var itCtrl = this;
    itCtrl.menuItems = items.data.menu_items;
    itCtrl.category = items.data.category.name;
  }
})();
