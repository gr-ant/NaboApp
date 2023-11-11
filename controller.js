// In your controller.js
app.controller('MyController', function($scope) {
    if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}
    $scope.showProfile = false;
    $scope.showExplore = false;
    $scope.showChat = false;
    $scope.showLanding = true;
    $scope.showSettings = false;
    $scope.showHelp = false;

    const selectedColor = "#ffffffe1"
    const defaultColor = "#ffaeae"
    $scope.openLanding = function() {
        $scope.showProfile = false;
        $scope.showExplore = false;
        $scope.showChat = false;
        $scope.showLanding = true
        $scope.showHelp = false
        $scope.showSettings = false
        $scope.profileButtonColor = {"background-color":selectedColor}
        $scope.chatButtonColor = {"background-color":selectedColor}
        $scope.exploreButtonColor = {"background-color":selectedColor}
        $scope.helpButtonColor = {"background-color":selectedColor}
        $scope.settingButtonColor = {"background-color":selectedColor}
    };
    $scope.openProfile = function() {
        $scope.showProfile = true;
        $scope.showExplore = false;
        $scope.showChat = false;
        $scope.showLanding = false
        $scope.showHelp = false
        $scope.showSettings = false
        $scope.profileButtonColor = {"background-color":defaultColor}
        $scope.chatButtonColor = {"background-color":selectedColor}
        $scope.exploreButtonColor = {"background-color":selectedColor}
        $scope.helpButtonColor = {"background-color":selectedColor}
        $scope.settingButtonColor = {"background-color":selectedColor}
    };
    $scope.openHelp = function() {
        $scope.showProfile = false;
        $scope.showExplore = false;
        $scope.showChat = false;
        $scope.showLanding = false
        $scope.showHelp = true
        $scope.showSettings = false
        $scope.profileButtonColor = {"background-color":selectedColor}
        $scope.chatButtonColor = {"background-color":selectedColor}
        $scope.exploreButtonColor = {"background-color":selectedColor}
        $scope.settingButtonColor = {"background-color":selectedColor}
        $scope.helpButtonColor = {"background-color":defaultColor}
        
    };
    $scope.openSettings = function() {
        $scope.showProfile = false;
        $scope.showExplore = false;
        $scope.showChat = false;
        $scope.showLanding = false
        $scope.showHelp = false
        $scope.showSettings = true
        $scope.profileButtonColor = {"background-color":selectedColor}
        $scope.chatButtonColor = {"background-color":selectedColor}
        $scope.exploreButtonColor = {"background-color":selectedColor}
        $scope.helpButtonColor = {"background-color":selectedColor}
        $scope.settingButtonColor = {"background-color":defaultColor}
        
    };

    $scope.openExplore = function() {
        $scope.showProfile = false;
        $scope.showExplore = true;
        $scope.showChat = false;
        $scope.showLanding = false
        $scope.showHelp = false
        $scope.showSettings = false
        $scope.profileButtonColor = {"background-color": selectedColor}
        $scope.chatButtonColor = {"background-color":selectedColor}
        $scope.exploreButtonColor = {"background-color":defaultColor}
        $scope.settingButtonColor = {"background-color":selectedColor}
        $scope.helpButtonColor = {"background-color":selectedColor}
    };

    $scope.openChat = function() {
        $scope.showProfile = false;
        $scope.showExplore = false;
        $scope.showChat = true;
        $scope.showLanding = false
        $scope.showHelp = false
        $scope.showSettings = false
        $scope.profileButtonColor = {"background-color":selectedColor}
        $scope.exploreButtonColor = {"background-color:":selectedColor}
        $scope.chatButtonColor = {"background-color":defaultColor}
        $scope.settingButtonColor = {"background-color":selectedColor}
        $scope.helpButtonColor = {"background-color":selectedColor}
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
