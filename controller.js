// In your controller.js
app.controller('MyController', function($scope) {
    $scope.showProfile = false;
    $scope.showExplore = false;
    $scope.showChat = false;
    $scope.showLanding = true

    $scope.openProfile = function() {
        $scope.showProfile = true;
        $scope.showExplore = false;
        $scope.showChat = false;
        $scope.showLanding = false
    };

    $scope.openExplore = function() {
        $scope.showProfile = false;
        $scope.showExplore = true;
        $scope.showChat = false;
        $scope.showLanding = false
    };

    $scope.openChat = function() {
        $scope.showProfile = false;
        $scope.showExplore = false;
        $scope.showChat = true;
        $scope.showLanding = false
    };
    // Sample data
    $scope.userName = "John Doe";
    $scope.userEmail = "johndoe@example.com";
    $scope.userAge = 30;
    $scope.userCity = "New York";
    $scope.userFood = "Pizza";

    $scope.chats = [
        { name: "Pizza Hut", lastMessage: "See you soon!" },
        { name: "Art Museum", lastMessage: "Thanks!" },
        { name: "Central Library", lastMessage: "New arrivals are available." },
        { name: "City Park", lastMessage: "Event starts at 3 PM." },
        { name: "The Coffee House", lastMessage: "Your order is ready." },
        { name: "Tech World", lastMessage: "Your item has been shipped." },
        { name: "Gourmet Bistro", lastMessage: "Reservation confirmed for 7 PM." },
        { name: "Cinema Plex", lastMessage: "New movies this week!" },
        { name: "Fitness Club", lastMessage: "New yoga classes available." },
        { name: "Book Corner", lastMessage: "Book club meeting on Friday." },
        { name: "Pizza Hut", lastMessage: "See you soon!" },
        { name: "Art Museum", lastMessage: "Thanks!" },
        { name: "Central Library", lastMessage: "New arrivals are available." },
        { name: "City Park", lastMessage: "Event starts at 3 PM." },
        { name: "The Coffee House", lastMessage: "Your order is ready." },
        { name: "Tech World", lastMessage: "Your item has been shipped." },
        { name: "Gourmet Bistro", lastMessage: "Reservation confirmed for 7 PM." },
        { name: "Cinema Plex", lastMessage: "New movies this week!" },
        { name: "Fitness Club", lastMessage: "New yoga classes available." },
        { name: "Book Corner", lastMessage: "Book club meeting on Friday." },
        { name: "Pizza Hut", lastMessage: "See you soon!" },
        { name: "Art Museum", lastMessage: "Thanks!" },
        { name: "Central Library", lastMessage: "New arrivals are available." },
        { name: "City Park", lastMessage: "Event starts at 3 PM." },
        { name: "The Coffee House", lastMessage: "Your order is ready." },
        { name: "Tech World", lastMessage: "Your item has been shipped." },
        { name: "Gourmet Bistro", lastMessage: "Reservation confirmed for 7 PM." },
        { name: "Cinema Plex", lastMessage: "New movies this week!" },
        { name: "Fitness Club", lastMessage: "New yoga classes available." },
        { name: "Book Corner", lastMessage: "Book club meeting on Friday." },{ name: "Pizza Hut", lastMessage: "See you soon!" },
        { name: "Art Museum", lastMessage: "Thanks!" },
        { name: "Central Library", lastMessage: "New arrivals are available." },
        { name: "City Park", lastMessage: "Event starts at 3 PM." },
        { name: "The Coffee House", lastMessage: "Your order is ready." },
        { name: "Tech World", lastMessage: "Your item has been shipped." },
        { name: "Gourmet Bistro", lastMessage: "Reservation confirmed for 7 PM." },
        { name: "Cinema Plex", lastMessage: "New movies this week!" },
        { name: "Fitness Club", lastMessage: "New yoga classes available." },
        { name: "Book Corner", lastMessage: "Book club meeting on Friday." },{ name: "Pizza Hut", lastMessage: "See you soon!" },
        { name: "Art Museum", lastMessage: "Thanks!" },
        { name: "Central Library", lastMessage: "New arrivals are available." },
        { name: "City Park", lastMessage: "Event starts at 3 PM." },
        { name: "The Coffee House", lastMessage: "Your order is ready." },
        { name: "Tech World", lastMessage: "Your item has been shipped." },
        { name: "Gourmet Bistro", lastMessage: "Reservation confirmed for 7 PM." },
        { name: "Cinema Plex", lastMessage: "New movies this week!" },
        { name: "Fitness Club", lastMessage: "New yoga classes available." },
        { name: "Book Corner", lastMessage: "Book club meeting on Friday." },
        { name: "Pizza Hut", lastMessage: "See you soon!" },
        { name: "Art Museum", lastMessage: "Thanks!" },
        { name: "Central Library", lastMessage: "New arrivals are available." },
        { name: "City Park", lastMessage: "Event starts at 3 PM." },
        { name: "The Coffee House", lastMessage: "Your order is ready." },
        { name: "Tech World", lastMessage: "Your item has been shipped." },
        { name: "Gourmet Bistro", lastMessage: "Reservation confirmed for 7 PM." },
        { name: "Cinema Plex", lastMessage: "New movies this week!" },
        { name: "Fitness Club", lastMessage: "New yoga classes available." },
        { name: "Book Corner", lastMessage: "Book club meeting on Friday." }
    ];
    $scope.userProfile = {
        name: "John Doe",
        email: "johndoe@example.com",
        age: 30,
        city: "New York",
        favoriteFood: "Pizza"
    };
    $scope.saveProfile = function() {
        console.log("Profile Saved:", $scope.userProfile);
        
    };
});
