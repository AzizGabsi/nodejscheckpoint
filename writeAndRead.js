const fs = require('fs');

fs.writeFile("welcome.txt", "Hello Node", function(err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("File has been written!")
    }
})

fs.readFile("welcome.txt", function(err, data){
    if (err) {
        console.log(err);
    }
    else {
        console.log(data.toString());
    }
})