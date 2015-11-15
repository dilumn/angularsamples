mainApp.controller('DynamicController', ['$scope', function($scope){

  var users = [
      { 
        name: 'Dilum',
        email: '' ,
        isText: false
      },
      {
        name: 'Holly',
        email: 'asdfasd@gmail.com' ,
        isText: true
      }
  ];

  $scope.formData = {};
  $scope.formData.users = users;

}]);
