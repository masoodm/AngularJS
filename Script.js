

// var app = angular.module("myModule", []);

// app.controller("myController", function($scope, $http) {
// 	$http.get('https://graph.facebook.com/v2.9/msaatucd?fields=about,location,name,mission,events{attending_count,name,maybe_count,declined_count,noreply_count,interested_count,photos{link}}&access_token=EAACUDfgUluwBALv4UUZCTo4DyCwe4tvuhJG3MuFKLCXvo0m967V48FRor7gj5c32tG7kaxPdaXUKWvbZA7kMW1AZCrCt3EufSwVXLcFElrZBmTDxBNZCTKhUKgkS2bwgaJ9Rp2NgethqBJRHXfRXnS0bis7ByzuxIv4oyhE6VKJnJEtucaI4gZBjRbg9f4ihcZD')
// 	.then(function(data,status,headers,config) {
// 		$scope.posts = data.events.data;
// 		$scope.post = data;
// 		console.log(data);
// 	}).function(data,status,headers,config) {
// 		console.log("You have an error buddy");
// 					$scope.h = "hlkj";

// 	};


// });

var app = angular.module("myModule", ['ngMaterial']);

app.controller("myController", function($scope, $http) {

$http.get('https://graph.facebook.com/v2.9/478748558921942?fields=about,location,name,mission,events{attending_count,name,maybe_count,declined_count,noreply_count,interested_count,photos{link}}&access_token=EAACUDfgUluwBACYY716ZCj9wG3NmEnvsDMMeud5jTnOq6fWeo9c0076IuWVKHAd5FdfoqnU8C8SQx8tZBem1NZAXbQqZCHT2czoie3XJpW2nfztTf65mkCfwFshOckJPPnIeyiOZAD1ZC9U0rrkegZAd9cFo9p3qwWS2x1nwY6mgAZDZD')
  .then(function (response) {

    var data = response.data;
    var status = response.status;
    var statusText = response.statusText;
    var headers = response.headers;
    var config = response.config;

    var impData = response.data.events.data;

    $scope.post = data;
    $scope.posts = impData;
    console.log(data);
});

});


