// controllers.js

var wheelControllers = angular.module('wheelControllers', []);



wheelControllers.controller('WheelListCtrl', ['$scope', '$http', '$rootScope', '$location',
  function ($scope, $http , $rootScope ,$location) {
      // $scope.lists = $rootScope.getLists();
      $scope.addSlider = function(){
        $location.url('/sliders/new');
      }
  }]);

wheelControllers.controller('WheelDetailCtrl', ['$scope', '$routeParams', '$rootScope',
  function($scope, $routeParams ,$rootScope) {
    // $scope. = $routeParams.;
    $scope.pages = $scope.pages || [{
      "style" : {
        "backgroundColor" : "#fff"
      }
    }];
    $scope.selected = 0;

    // 翻转方式
    $scope.turns = [{"name" : "普通"} ,{ "name" : "3D翻转"}]

    $scope.select = function(index){
      $scope.selected = index;
    };
    
    // 添加页面
    $scope.addPage = function(){
      $scope.pages.push({});
    }

    // 保存
    $scope.save = function(){
    }

    // 改变翻转方式
    $scope.changeTurn = function(){
      console.log('aaa');
    }



  }]);