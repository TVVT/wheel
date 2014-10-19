var wheelApp = angular.module('wheelApp', [
'ngRoute',
'wheelControllers'
]).directive('myDirective', function() {
  return {
    require: '?ngModel',
    link: function(scope, ele, attrs, ngModel) {
    if (!ngModel) return;
    // Now we have a hold of the // ngModelController instance // inside of our directive
    } };
}).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/sliders', {
        templateUrl: 'partials/list.html',
        controller: 'WheelListCtrl'
      }).
      when('/sliders/:sliderID', {
        templateUrl: 'partials/detail.html',
        controller: 'WheelDetailCtrl'
      }).
      otherwise({
        redirectTo: '/sliders'
      });
  }]);