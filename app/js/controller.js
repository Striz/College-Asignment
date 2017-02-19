 myApp.controller('ContactController', ['$scope', '$location', function($scope, $location){
   
   $scope.sendMsg = function(){
     $location.path('submitSuccess');
   };
   
 }]);
 
 myApp.controller('myController',['$scope', function($scope){
   
   $scope.msg = "Hello my Friend!!";
   
   $scope.removeFriend = function(friend){
   var removedFriend = $scope.friends.indexOf(friend);
   $scope.friends.splice(removedFriend, 1);
   };
   
   $scope.addFriend = function(){
     $scope.friends.push({
       name: $scope.newFriend.name,
       job:  $scope.newFriend.job,
       money: parseInt($scope.newFriend.money),
       available: true
     });
     
     $scope.newFriend.name = "";
     $scope.newFriend.job ="";
     $scope.newFriend.money="";
   };
   
   $scope.removeAll = function(){
     $scope.friends =[];
      
   };
   $scope.friends = [
     {
       name: "Ben",
       job: "postman",
       money: 1100,
       available: true,
       image:"https://placeimg.com/50/50/people/1"
     },
      {
       name: "Tedd",
       job: "teacher",
      money: 1000,
      available: true,
      image:"https://placeimg.com/50/50/people/2"
     },
      {
       name: "Max",
       job: "doctor",
       money: 800,
       available: true,
       image:"https://placeimg.com/50/50/people/3"
       
     },
      {
       name: "Frank",
       job: "steward",
       money: 1200,
       available: true,
      image:"https://placeimg.com/50/50/people/6"
     }
    ];
     
 }]);