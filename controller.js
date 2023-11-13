// In your controller.js
app.controller('MyController', function($scope) {
    $scope.mainColor = "#ffffff"
    $scope.secondColor = "#a13a5e"
    $scope.thirdColor = "#044b22"
    $scope.fourthColor = "#044b22"
    $scope.fifthColor = "#a7a4a4"
    $scope.showProfile = false;
    $scope.showExplore = false;
    $scope.showChat = false;
    $scope.showLanding = true;
    $scope.showSettings = false;
    $scope.showHelp = false;

    $scope.openLanding = function() {
        $scope.showProfile = false;
        $scope.showExplore = false;
        $scope.showChat = false;
        $scope.showLanding = true
        $scope.showHelp = false
        $scope.showSettings = false
        $scope.profileButtonColor = {"background-color":$scope.mainColor}
        $scope.chatButtonColor = {"background-color":$scope.mainColor}
        $scope.exploreButtonColor = {"background-color":$scope.mainColor}
        $scope.helpButtonColor = {"background-color":$scope.mainColor}
        $scope.settingButtonColor = {"background-color":$scope.mainColor}
    };
    $scope.openProfile = function() {
        $scope.showProfile = true;
        $scope.showExplore = false;
        $scope.showChat = false;
        $scope.showLanding = false
        $scope.showHelp = false
        $scope.showSettings = false
        $scope.profileButtonColor = {"background-color":$scope.secondColor}
        $scope.chatButtonColor = {"background-color":$scope.mainColor}
        $scope.exploreButtonColor = {"background-color":$scope.mainColor}
        $scope.helpButtonColor = {"background-color":$scope.mainColor}
        $scope.settingButtonColor = {"background-color":$scope.mainColor}
    };
    $scope.openHelp = function() {
        $scope.showProfile = false;
        $scope.showExplore = false;
        $scope.showChat = false;
        $scope.showLanding = false
        $scope.showHelp = true
        $scope.showSettings = false
        $scope.profileButtonColor = {"background-color":$scope.mainColor}
        $scope.chatButtonColor = {"background-color":$scope.mainColor}
        $scope.exploreButtonColor = {"background-color":$scope.mainColor}
        $scope.settingButtonColor = {"background-color":$scope.mainColor}
        $scope.helpButtonColor = {"background-color":$scope.secondColor}
        
    };
    $scope.openSettings = function() {
        $scope.showProfile = false;
        $scope.showExplore = false;
        $scope.showChat = false;
        $scope.showLanding = false
        $scope.showHelp = false
        $scope.showSettings = true
        $scope.profileButtonColor = {"background-color":$scope.mainColor}
        $scope.chatButtonColor = {"background-color":$scope.mainColor}
        $scope.exploreButtonColor = {"background-color":$scope.mainColor}
        $scope.helpButtonColor = {"background-color":$scope.mainColor}
        $scope.settingButtonColor = {"background-color":$scope.secondColor}
        
    };

    $scope.openExplore = function() {
        $scope.showProfile = false;
        $scope.showExplore = true;
        $scope.showChat = false;
        $scope.showLanding = false
        $scope.showHelp = false
        $scope.showSettings = false
        $scope.profileButtonColor = {"background-color": $scope.mainColor}
        $scope.chatButtonColor = {"background-color":$scope.mainColor}
        $scope.exploreButtonColor = {"background-color":$scope.secondColor}
        $scope.settingButtonColor = {"background-color":$scope.mainColor}
        $scope.helpButtonColor = {"background-color":$scope.mainColor}
    };

    $scope.openChat = function() {
        $scope.showProfile = false;
        $scope.showExplore = false;
        $scope.showChat = true;
        $scope.showLanding = false
        $scope.showHelp = false
        $scope.showSettings = false
        $scope.profileButtonColor = {"background-color":$scope.mainColor}
        $scope.exploreButtonColor = {"background-color:":$scope.mainColor}
        $scope.chatButtonColor = {"background-color":$scope.secondColor}
        $scope.settingButtonColor = {"background-color":$scope.mainColor}
        $scope.helpButtonColor = {"background-color":$scope.mainColor}
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
     // Add this inside your MyController
    $scope.userSettings = {
        distance: 10, // Default distance, adjust as needed
        wheelchairAccessible: false,
        alcohol: false,
        smoking: false,
        marajuana: false,
        familyFriendly: false,
        anonymous: false,
        dataCollection: false,
        companyProfileView: false,
        userReviewVisibility: false,
        pricelevel: String($scope.pricelevel).length
    };

    $scope.stayAnon = function () {
        $scope.userSettings.dataCollection = false
        $scope.userSettings.companyProfileView = false
        $scope.userSettings.userReviewVisibility = false
    }

    $scope.removeAnon = function () {
        $scope.userSettings.anonymous = false
    }

    $scope.downloadUserData = function() {
        // Implement functionality to download user data
        console.log("Downloading user data...");
    };   
});
