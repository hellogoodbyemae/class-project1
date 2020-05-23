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

            for (var i=0; i<jobData.results.length; i++){
                console.log(jobData.results[i].title);
                console.log(jobData.results[i].description);
                console.log(jobData.results[i].company.display_name);
                console.log(jobData.results[i].location.display_name);
                console.log(jobData.results[i].redirect_url);

                // $("#results-view").text(JSON.stringify(jobData));
                jobDiv = $("#results-view");
                // jobDiv.append(class; job)

                var title = jobData.results[i].title;
                var pOne = $("<h4>").text(title);
                jobDiv.append(pOne);

                var description = jobData.results[i].description;
                var pTwo = $("<p>").text(description);
                jobDiv.append(pTwo);

                var dispName = jobData.results[i].company.display_name;
                var pThree = $("<p>").text(dispName);
                jobDiv.append(pThree);

                var location = jobData.results[i].location.display_name;
                var pFour = $("<p>").text(location);
                jobDiv.append(pFour);

                var url = jobData.results[i].redirect_url;
                var pFive = $("<a>").text(url);
                jobDiv.append("<a href='" + url + "'>" + url + "</a>");

                $("#results-view").prepend(jobDiv);

            }

            
        });
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

