

var friends = require("./friends");


var asMe = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];



var obj = {};

function compareMeAndUsers() {
    for (var i = 0; i < friends.length; i++) {
        obj["score_" + i] = [];

        for (var j = 0; j < friends[i].scores.length; j++) {

            // TODO
            // Make sure you convert them into absolute
            var ourData = parseInt(friends[i].scores[j]);
            var me = asMe[j];

            obj["score_" + i].push(me - ourData);

        }
    }
}

compareMeAndUsers();


var diff = [];

function totalDiff() {
    for (var x in obj) {
        var results = obj[x].reduce(function (a, b) {
            return a + b;
        });

        diff.push(results);
    }
}

totalDiff();


// Make a copy of total diff
var copyDiff = diff.slice(0);


// Sort the total Diff from lowest to highest
var finalResults = diff.sort(function (a, b) {
    return a + b;
});


// Locate the index of the lowest or closest match
var index = copyDiff.indexOf(finalResults[0]);

console.log(friends[index]); //closest match












// // ===============================================================================
// // LOAD DATA
// // We are linking our routes to a series of "data" sources.
// // These data sources hold arrays of information on all possible friends
// // ===============================================================================
//
// var friends = require("../data/friends");
//
// // ===============================================================================
// // ROUTING
// // ===============================================================================
//
// module.exports = function(app) {
//
//   // API GET Requests
//   // Below code handles when users "visit" a page.
//   // In each of the below cases when a user visits a link
//   // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
//   // ---------------------------------------------------------------------------
//
//   app.get("/api/friends", function(req, res) {
//     res.json(friends);
//   });
//
//
//   // API POST Requests
//   // Below code handles when a user submits a form and thus submits data to the server.
//   // In each of the below cases, when a user submits form data (a JSON object)
//   // ...the JSON is pushed to the appropriate JavaScript array
//   // ---------------------------------------------------------------------------
//
//   app.post("/api/friends", function(req, res) {
//
//     // Note the code here. Our "server" will respond to a user"s survey result
//     // Then compare those results against every user in the database.
//     // It will then calculate the difference between each of the numbers and the user"s numbers.
//     // It will then choose the user with the least differences as the "best friend match."
//     // In the case of multiple users with the same result it will choose the first match.
//     // After the test, it will push the user to the database.
//
//     // We will use this object to hold the "best match". We will constantly update it as we
//     // loop through all of the options
//     var bestMatch = {
//       name: "",
//       photo: "",
//       friendDifference: 1000
//     };
//
//     // Here we take the result of the user"s survey POST and parse it.
//     var userData = req.body;
//     var userScores = userData.scores;
//
//     // This variable will calculate the difference between the user"s scores and the scores of
//     // each user in the database
//     var totalDifference = 0;
//
//     // Here we loop through all the friend possibilities in the database.
//     for (var i = 0; i < friends.length; i++) {
//
//       console.log(friends[i].name);
//       totalDifference = 0;
//
//       // We then loop through all the scores of each friend
//       for (var j = 0; j < friends[i].scores[j]; j++) {
//
//         // We calculate the difference between the scores and sum them into the totalDifference
//         totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
//
//         // If the sum of differences is less then the differences of the current "best match"
//         if (totalDifference <= bestMatch.friendDifference) {
//
//           // Reset the bestMatch to be the new friend.
//           bestMatch.name = friends[i].name;
//           bestMatch.photo = friends[i].photo;
//           bestMatch.friendDifference = totalDifference;
//         }
//       }
//     }
//
//     // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
//     // the database will always return that the user is the user's best friend).
//     friends.push(userData);
//
//     // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
//     res.json(bestMatch);
//
//   });
//
// };
