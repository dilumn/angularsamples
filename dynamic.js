mainApp.controller('DynamicController', ['$scope', function($scope){

  var users = [
      { 
        name: 'Lalin',
        type :'text',
        email: '' ,
        isText: true
      },
      {
        name: 'Gihan',
        type :'checkbox',
        email: 'asdfasd@gmail.com' ,
      },
      {
        name: 'John',
        type :'checkbox',
        email: 'John@gmail.com' ,
      },
      {
        name: 'Dilum',
        type :'text',
        email: 'Dilum@gmail.com' ,
      },
      {
        name: 'Navanjana',
        type :'radio',
        email: 'Navanjana@gmail.com' ,
      },
      {
        name: 'Wikum',
        type :'radio',
        email: 'wikum@gmail.com' ,
      },
      {
        name: 'Gayan',
        type :'week',
        email: 'Gayan@gmail.com' ,
      },
      {
        name: 'Dhanika',
        type :'week',
        email: 'Dhanika@gmail.com' ,
      },
      {
        name: 'Dishan',
        type :'range',
        email: 'Dishan@gmail.com' ,
      },
      {
        name: 'Prasad',
        type :'range',
        email: 'Prasad@gmail.com' ,
      },
      {
        name: 'Menu',
        type :'text',
        email: 'Menu@gmail.com' ,
      },
      {
        name: 'Lahiru',
        type :'text',
        email: 'Lahiru@gmail.com' ,
      },
      {
        name: 'Biman',
        type :'text',
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
}])

.directive('dynamicView', function() {
    return {
      templateUrl: 'dynamic-view.html'
    };
});

// mainApp.directive('input', function() {
//     return {
//         restrict: 'E',
//         require: 'ngModel',
//         link: function (scope, element, attr, ngModel) {
//           if (attr.type !== 'path') return;

//           // Override the input event and add custom 'path' logic
//           // element.unbind('input');
//           // element.bind('input', function () {
//           //   var path = this.value.replace(/\\/g, '/');

//           //   scope.$apply(function () {
//           //     ngModel.$setViewValue(path);
//           //   });
//           // });

//           attr.type = "checkbox";
//         }
//     };
// });

// mainApp.directive('dynamicView', function() {
//     return {
//       templateUrl: 'dynamic-view.html'
//     };
// });
