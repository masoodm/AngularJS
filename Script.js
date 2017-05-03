var myApp = angular.module("myModule", []);

myApp.controller("myController", function($scope) {
	"use strict";
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://graph.facebook.com/me/friends?fields=last_name,first_name,id,gender&access_token=EAACEdEose0cBAN6ZBezBN61FXJEYx7Ax50YPE5RA5G9vpav7nPXv1Wy4Oq1ARrUu4I4AmjpEqPQ6LBWNfdiW36mEvPO1lZAKwqxwIq2B5iTXLkOBNMfDDmpUMFvvhCRfmtOixOZCXDvkwJve8O8BLxuAuHU7vIR2l0MAV3kxWg0GA2EGrHcgHovTz2mSNkZD');
	ourRequest.onload = function() {
		var ourData = JSON.parse(ourRequest.responseText);
		console.log(ourData.data[0].last_name);
	};



	ourRequest.send();
});