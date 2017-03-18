let CourseCombiApp = angular.module('CourseCombiApp', []);

CourseCombiApp.controller('mainPageController', function PhoneListController($scope) {
  $scope.dropdown = false;
  $scope.universities = [
    {
      name: 'The University of Sunderland'
    }, {
      name: 'The University of Auckland'
    }, {
      name: 'University of Richmond'
    }, {
      name: 'University of Miami'
    }, {
      name: 'University of York'
    }, {
      name: 'The University of Manchester'
    }
  ];
  $scope.university = "";
  $scope.setUniversity = (u) => {
    document.getElementById("university").innerHTML = "<h1>" + u + "</h1>";
    $scope.university = u;
  }
  
  $scope.courses = [];
  $scope.addCourse = () => {
    let course = document.getElementById('course').value;
    document.getElementById('course').value = "";
    $scope.courses.push(course);
  };
  $scope.removeCourse = (index) => {
    $scope.courses.splice(index, 1);
  }
});