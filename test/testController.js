'use strict'; 
describe('PasswordController', function() {
  var $controller, $firebaseArray, $httpBackend, $http, $scope_mock;
  
  // Injecting variables
  // http://stackoverflow.com/questions/13664144/how-to-unit-test-angularjs-controller-with-location-service
  beforeEach(function() {
    module('Bookmark');

    inject(function(_$rootScope_, _$http_, _$httpBackend_, _$controller_, _$firebaseArray_) {
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $controller = _$controller_;
      $firebaseArray = _$firebaseArray_;
      $httpBackend = _$httpBackend_;
      $http = _$http_;

      // need to get a new scope
      $scope_mock = _$rootScope_.$new();
    });
  });

  describe('$scope.add', function() {
    it('add testing', function() {
      var controller = $controller('Ctrl', {$scope:$scope_mock});
      expect($scope_mock.add(1,1)).toEqual(2);
    });
  });
});
