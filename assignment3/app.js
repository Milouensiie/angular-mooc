(function() {
  'use strinct';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var down = this;
    down.searchTerm = "";
    down.found = [];
    down.error = false;
    down.getResults = function() {
      down.error = false;
      promise = MenuSearchService.getMatchedMenuItems(down.searchTerm);
      promise.then(function (result) {
        var foundItems = [];
        for (var i = 0; i < result.data.menu_items.length; i++) {
          var description = result.data.menu_items[i].description;
          if (description.toLowerCase().indexOf(down.searchTerm) !== -1) {
            foundItems.push(result.data.menu_items[i]);
          }
        }
        down.found = foundItems;
        down.error = (foundItems.length == 0);
      }).catch(function(err) {
        down.error = true;
      });
    };
    down.removeItem = function(index) {
      down.found.splice(index, 1);
    };
  }

  MenuSearchService.$inject = ['$http']
  function MenuSearchService($http) {
    var service = this;
    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      });
    }
  }

  function FoundItems() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        onRemove: '&'
      },
      restrict: 'E'
    };
    return ddo
  }

})();
