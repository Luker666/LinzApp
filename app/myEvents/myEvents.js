'use strict';

angular.module('myApp.myEvents', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/myEvents', {
    templateUrl: 'myEvents/myEvents.html',
    controller: 'myEventsCtrl'
  })
}])
.controller('myEventsCtrl', ['$scope', function($scope) {

}]);
