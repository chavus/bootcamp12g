const fs = require('fs');
function myCallback(error){
    if (error){
        console.error(error);
    }else{
        console.log("File modified successfully");
    };

}
fs.appendFile('files/first.txt', 'appended later','utf8',myCallback)