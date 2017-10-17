// Code goes here

var app = angular.module("app", []);

app.controller("statecntrl", function($scope) {
  
  $scope.states = ['NJ', 'NY', 'TX', 'CA'];
  
  $scope.addState = function() {
    $scope.states.push($scope.newstate);
    $scope.newstate = "";
    console.log($scope.states);
  }
  
  $scope.delState = function(state) {
    var i = $scope.states.indexOf(state);
    $scope.states.splice(i, 1);
  }
  
  
})