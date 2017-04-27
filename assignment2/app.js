(function () {
  'use strinct';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var tbc = this;
    tbc.items = ShoppingListCheckOffService.getToBuy();
    tbc.bought= function (index) {
      ShoppingListCheckOffService.transfer(index);
    };
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var abc = this;
    abc.items = ShoppingListCheckOffService.getBought();
  };

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuy = [{ name: "cookies", quantity: 10 },{ name: "something", quantity: 1 },{ name: "tea", quantity: 10 },{ name: "chips", quantity: 100 },{ name: "cookies", quantity: 10 }];
    var bought = [];
    service.transfer = function(index) {
      bought.push(toBuy[index]);
      toBuy.splice(index,1);
      boughtEmpty = false;
    };
    service.getToBuy = function() {
      return toBuy;
    };
    service.getBought = function() {
      return bought;
    };
  };
})();
