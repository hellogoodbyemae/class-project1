// alert("Test");

// SET UP VARIABLES
var adzId = "673aae0c";
var adzKey = "d305d78426efb2b49e37fda6396a7790";

//Search Parameters
var queryJob = "";
var jobLocation = "";

//queryURL
var queryURLBase = "https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=" + adzId + "&app_key=" + adzKey;

// FUNCTIONS
function runQuery(response, queryURLBase){
    $.ajax({url: queryURLBase, method: "GET", Accept: "application/json"})
        .then(function(jobData) {
            console.log(queryURLBase);
            console.log(jobData);

            $("#results-view").text(JSON.stringify(jobData));
        })
}

function displayResults(){

}

// PROCESS
$("#search").on("click", function(event) {

    event.preventDefault();

    queryJob = $("#job-search").val().trim();
    console.log(queryJob);

    jobLocation = $("#location-search").val().trim();
    console.log(jobLocation);

    //Add in Search Term
    var newURL = queryURLBase + "&what=" + queryJob + "&where=" + jobLocation + "&content-type=application/json";
    console.log(newURL);

    runQuery(10, newURL);

})

