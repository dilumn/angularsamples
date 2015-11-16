mainApp.controller('DynamicController', ['$scope', function($scope){

  var users = [
      { 
        name: 'Lalin',
        email: '' ,
        isText: true
      },
      {
        name: 'Holly',
        email: 'asdfasd@gmail.com' ,
      },
      {
        name: 'John',
        email: 'John@gmail.com' ,
      },
      {
        name: 'Dilum',
        email: 'Dilum@gmail.com' ,
      },
      {
        name: 'Navanjana',
        email: 'Navanjana@gmail.com' ,
      },
      {
        name: 'Wikum',
        email: 'wikum@gmail.com' ,
      },
      {
        name: 'Gayan',
        email: 'Gayan@gmail.com' ,
      },
      {
        name: 'Dhanika',
        email: 'Dhanika@gmail.com' ,
      },
      {
        name: 'Dishan',
        email: 'Dishan@gmail.com' ,
      },
      {
        name: 'Prasad',
        email: 'Prasad@gmail.com' ,
      },
      {
        name: 'Menu',
        email: 'Menu@gmail.com' ,
      },
      {
        name: 'Lahiru',
        email: 'Lahiru@gmail.com' ,
      },
      {
        name: 'Biman',
        email: 'Biman@gmail.com' ,
      }
  ];

  function chunk(arr, size, start) {
  var newArr = [];
  for (var i=start; i<arr.length; i+=size) {
    newArr.push(arr[i]);
  }
  return newArr;
  }

  $scope.firstUsers = chunk(users, 2, 0);
  $scope.secondUsers = chunk(users, 2, 1);

  $scope.formData = {};
  $scope.formData.users = users;
}]);
