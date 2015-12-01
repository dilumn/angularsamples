mainApp.controller('Controller', ['$scope', function($scope){
}])
   .directive('myFrame', function() {
     return {
       templateUrl: 'my-frame.html'
     };
});

mainApp.controller('Navigation', ['$scope', function($scope){

   $scope.templates=[];

   $scope.include = function(templateURI) {
      var template={url:templateURI};
      $scope.templates.push(template);
   }

   $scope.delete= function(url){
     removeEntity($scope.templates,url);
   }

   var removeEntity = function(elements,url){
     elements.forEach(function(element,index){
       if(element.url===url){
         elements.splice(index,1);
         removeEntity(elements,url);
       }
     })
   }

}]);


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



