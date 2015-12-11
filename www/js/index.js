'use strict';

var app = angular.module('phoneApp', ['ui.router', 'ngCordova'])


app.controller('testCtrl', function($scope, $cordovaVibration){
  $scope.number = 5;
  $scope.vibrate = function(time) {
    console.log("vibrate")
    $cordovaVibration.vibrate(time * 1000);
  }
})
