// In your controller.js
app.controller('MyController', function($scope) {
    $scope.showProfile = false;
    $scope.showExplore = false;
    $scope.showChat = false;

    $scope.openProfile = function() {
        $scope.showProfile = true;
        $scope.showExplore = false;
        $scope.showChat = false;
    };

    $scope.openExplore = function() {
        $scope.showProfile = false;
        $scope.showExplore = true;
        $scope.showChat = false;
    };

    $scope.openChat = function() {
        $scope.showProfile = false;
        $scope.showExplore = false;
        $scope.showChat = true;
    };
    // Sample data
    $scope.userName = "John Doe";
    $scope.userEmail = "johndoe@example.com";
    $scope.userAge = 30;
    $scope.userCity = "New York";
    $scope.userFood = "Pizza";

    $scope.chats = [
        { name: "Alice", lastMessage: "See you soon!"},
        { name: "Bob", lastMessage: "Thanks!"},
        // ... other chats
    ];
    

});
