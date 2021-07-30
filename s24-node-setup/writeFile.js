const fs = require("fs")
//https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
function myCallback(err){
    if (err){
        console.error(err);
    } else{
        console.log("File created!");
    }
}

fs.writeFile("files/second2.txt", "Hello world from node.js", "utf8", myCallback)