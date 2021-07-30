const fs = require("fs")

function myCallback(error){
    if (error){
        console.error(error);
    }else{
        console.log("File removed successfully");
    }
}
fs.unlink("files/first.txt", myCallback)

//copyFile() 

// directories, crear, actualizar y eleminar dirs