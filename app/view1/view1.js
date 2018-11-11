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
  }).
  when('/view2', {
    templateUrl: 'view1/eventDetails.html',
    controller: 'View2Ctrl'
  })
}])

.controller('View1Ctrl', ['$scope', function($scope) {

}]).
controller('EventDetailsCtrl', ['$scope', function($scope) {

}]).
controller('View2Ctrl', ['$scope', function($scope) {

}]);