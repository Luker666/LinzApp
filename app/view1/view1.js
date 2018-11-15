'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  }).
  when('/view1/:eventId', {
    templateUrl: 'view1/eventDetails.html',
    controller: 'EventDetailsCtrl'
  })
}])

.controller('View1Ctrl', ['$scope', function($scope) {

}]).
controller('EventDetailsCtrl', ['$scope', function($scope) {

}]);
