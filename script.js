angular.module('EpamApp', [])
  .controller('EpamController', function($http) {
    var epam = this;
    
    $http.get('/getData').then(function(result) {
      epam.testTotal = function(testName) {
        var test = result.data.find(function(element) {
          return element.name == testName;
        });
        
        return test.value1 + test.value2;
      };
    });
  });