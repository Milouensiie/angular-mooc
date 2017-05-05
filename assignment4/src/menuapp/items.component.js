(function () {
  'use strict';

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'ItemsController as ctrl',
    bindings: {
      items: '<',
      category: '<'
    }
  });

})();
