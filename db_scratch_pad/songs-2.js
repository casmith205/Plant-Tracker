// Load the NPM Package mysql
var mysql = require("mysql");


var fs = require('fs');


var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "plantDB"
});


fs.readFile("./usdaplants.csv", "utf8", function (thisIsAnErrorVar, fileData) {

    // If the code experiences any errors it will log the error to the console.
    if (thisIsAnErrorVar) {
        return console.log(thisIsAnErrorVar);
    }

    // Then split it by commas (to make it more readable)
    var fileDataArr = fileData.split("\n");

    for (i = 0; i < fileDataArr.length; i++) {
        var fileDataArr2 = fileDataArr[i].split(",");


        // We will then re-display the content as an array for later use.
        // console.log(fileDataArr2);

        var query = connection.query(
            "INSERT INTO song_table SET ?",
            {
                artist: fileDataArr2[1],
                song_title: fileDataArr2[2], 
                song_year: fileDataArr2[3],
                total_score: fileDataArr2[4],
                us_score: fileDataArr2[5],
                uk_score: fileDataArr2[6],
                europe_score: fileDataArr2[7],
                row_score:  fileDataArr2[8]
            },
            function (err, res) {
                // console.log(res);
                // console.log(res.affectedRows + " product inserted!\n");
     
            }
        );
    }
    connection.end();

})
