let CourseCombiApp = angular.module('CourseCombiApp', []);

CourseCombiApp.controller('mainPageController', function PhoneListController($scope) {
  $scope.dropdown = false;
  $scope.universities = [
    {
      name: 'Nexus S'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi'
    }, {
      name: 'MOTOROLA XOOM™'
    }
  ];
  $scope.setUniversity = function  (u){
    document.getElementById("university").innerHTML = "<h1>" + u + "</h1>";
  }
});