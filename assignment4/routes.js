(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/menuapp/templates/home.template.html'
    })

    // Categories page
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuapp/templates/categoriesMain.template.html',
      controller: 'CategoriesController as catCtrl',
      resolve: {
        categories: ['MenuDataService',
                  function (MenuDataService) {
                    return MenuDataService.getAllCategories();
                  }]
      }
    })

    // Items pages
    .state('items', {
      url: "/items/{categoryShortName}",
      templateUrl: 'src/menuapp/templates/itemsMain.template.html',
      controller: 'ItemsController as itCtrl',
      resolve: {
        items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    });

  } //End RoutesConfig

})();
