

var app = angular.module("myModule", []);


app.controller("myController", function($scope, $http) {
	$http.get('https://graph.facebook.com/v2.9/msaatucd?fields=about,location,name,mission,events{attending_count,name,maybe_count,declined_count,noreply_count,interested_count,photos{link}}&access_token=EAACUDfgUluwBABH74wZCv4JMRkAfKCBADNgxxl2ZBKhZCgslT410n0ieCNHAIC7RU3UZAx9ZAEf1TaNAEqBXac9jUppbEPdlFdbZCMhGO0vdq2uwkndROw2ZAA6h8iRYR9xf0ER2xYuynbdIbUm62xaLDd5AWE5DI7z9nE4mkYJ9KNLA1CnNyXCZAzCJP75qzy4ZD')
	.success(function(data,status,headers,config) {
		$scope.posts = data.events.data;
		$scope.post = data;
		console.log(data);
	}).error(function(data,status,headers,config) {
		console.log("You have an error buddy");
	});
});

