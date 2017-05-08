var app = angular.module("myModule", ['ngMaterial']);

app.controller("myController", function($scope, $http) {

$http.get('https://graph.facebook.com/v2.9/478748558921942?fields=about,location,name,mission,events{start_time,end_time,place,description, attending_count,name,maybe_count,declined_count,noreply_count,interested_count,photos{link,images}}&access_token=EAACUDfgUluwBACYY716ZCj9wG3NmEnvsDMMeud5jTnOq6fWeo9c0076IuWVKHAd5FdfoqnU8C8SQx8tZBem1NZAXbQqZCHT2czoie3XJpW2nfztTf65mkCfwFshOckJPPnIeyiOZAD1ZC9U0rrkegZAd9cFo9p3qwWS2x1nwY6mgAZDZD')
  .then(function (response) {

    var data = response.data;
    var status = response.status;
    var statusText = response.statusText;
    var headers = response.headers;
    var config = response.config;

    var impData = response.data.events.data;

    var fbPagess = ["MSA at UCD", "MSA", "YEAH"];

    $scope.fbPages = fbPagess;

    $scope.post = data;
    $scope.posts = impData;

    console.log(impData.name);
    console.log(impData[0].start_time);

    var aggiefeed = [];

    for(var i = 0; i < 10; i++){
        aggiefeed.push( {
        "icon": "icon-comment-alt",
        "actor": {
            "id" : "department identifier",
            "objectType": "person",
            "displayName": data.name,
            "author" : {
                "id" : "MM",
                "displayName" : "Masood Mawlavizada"
            },
            "image" : {
                "color" : "#f1c40f"
            }
        },
        "verb": "post",
        "title": impData[i].name,
        "object": {
            "ucdSrcId" : "content identifier",
            "objectType": "notification",
            "content": impData[i].description,
            "contentImage" : {
                "source" : "facebook",
                "dimensions" : {
                    "normal" : {
                        "url": impData[i].photos.data[0].images[0].source,
                        "width": 400,
                        "height": 280
                    },
                    "high" : {
                        "url": impData[0].photos.data[0].images[0].source,
                        "width": 650,
                        "height": 460
                    }
            },
            "ucdEdusModel" : {
                "url" : "http://facebook.com/" + impData[i].id,
                "urlDisplayName" : data.name + " Facebook Event Page",
                "event" : {
                    "location": impData[i].place.name,
                    "hasStartTime" : true,
                    "startDate": dateStyle(impData[i].start_time),
                    "endDate": dateStyle(impData[i].end_time),
                    "isAllDay": false,
                    "iCalendar" : "iCal string",
                    "addToGoogleCalendar": "string",
                    "attended": impData[i].attending_count,
                    "interested": impData[i].interested_count,
                    "declined": impData[i].declined_count,
                    "noreply": impData[i].noreply_count
                }
            },
            // "location" : {
            //     "displayName": "Mount Everest",
            //     "geo" : {
            //         "latitude": "27.9881",
            //         "longitude": "86.9253"
            //     },
            //     "geometry" : {
            //         "type": "Point",
            //         "coordinates": [86.9253, 27.9881]
            //     }
            // }
        },
        "to" : [
            {
                "id": "public",
                "g": false,
                "i": false
            }
        ],
        "ucdEdusMeta" : {
            "labels" : ["~academic", "some-label"],
            "startDate" : impData[i].start_time,
            "endDate" : impData[i].end_time
        }
    }
    });
    };

    $scope.aggiefeed = aggiefeed;



    console.log(document.getElementsByClassName("md-text"));




});
$scope.updateInfo = function(v2,v3,v4, v5,v6, v7) {
        // alert("EKLJEKJF");
        // console.log(v1 + v2);

   
        if(v2 == "no"){
            changeCSS(attendance);
            changeCSS(attendance1);


        } 
        if (v2 == "yes") {
            changeCSSBlock(attendance);
            changeCSSBlock(attendance1);
        }
        if(v3 == "no2"){
            changeCSS(interestedd);
            changeCSS(interestedd1);


        } 
        if (v3 == "yes2") {
            changeCSSBlock(interestedd);
            changeCSSBlock(interestedd1);
        }
        if(v4 == "no3"){
            changeCSS(declinedd);
            changeCSS(declinedd1);


        } 
        if (v4 == "yes3") {
            changeCSSBlock(declinedd);
            changeCSSBlock(declinedd1);
        }
        if(v5 == "no4"){
            changeCSS(noreplyy);
            changeCSS(noreplyy1);
          

        } 
        if (v5 == "yes4") {
            changeCSSBlock(noreplyy);
            changeCSSBlock(noreplyy1);
        }
        if(v6 == "no5"){
            changeCSS(descriptionn);
            changeCSS(descriptionn1);


        } 
        if (v6 == "yes5") {
            changeCSSBlock(descriptionn);
            changeCSSBlock(descriptionn1);
        }
        
    }

});

function changeCSS(id) {
    document.getElementsByClassName(id);
    for(var i = 0; i< id.length; i++){
        id[i].style.display = "none";
    }
}

function changeCSSBlock(id) {
    document.getElementsByClassName(id);
    for(var i = 0; i< id.length; i++){
        id[i].style.display = "block";
    }
}

function dateStyle (date){
    var date1 = new Date(date);
return (date1.getMonth() + 1) + '/' + date1.getDate() + '/' +  date1.getFullYear();
}



