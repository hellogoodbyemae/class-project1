// alert("Test");

// SET UP VARIABLES
var adzId = "673aae0c";
var adzKey = "d305d78426efb2b49e37fda6396a7790";

//Search Parameters
var queryJob = "";
var jobLocation = "";

//queryURL
var queryURL = "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=" + adzId + "&app_key=" + adzKey;

// FUNCTIONS
function runQuery(response, queryURL){
    $.ajax({url: queryURL, method: "GET", Accept: "application/json"})
        .done(function(jobData) {
            console.log(queryURL);
            console.log(jobData);
        })
}
runQuery("", queryURL);

//Yelp Function

//Firebase configuration
var farebaseConfig = {
    apiKey: "AIzaSyBXNXp4lldKHNSk5CtxATvLb1-T04IreXI",
    authDomain: "test-project-01-b27ab.firebaseapp.com",
    databaseURL: "https://test-project-01-b27ab.firebaseio.com",
    projectId: "test-project-01-b27ab",
    storageBucket: "test-project-01-b27ab.appspot.com",
    messagingSenderId: "312489434875",
    appId: "1:312489434875:web:87691ea15434eafa7d1a5e"
}
//Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// PROCESS