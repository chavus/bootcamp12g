const fs = require("fs")
// const moment = require("moment")

// let date = new Date()
// console.log("Hello world,", moment(date).toString());


function myCallback(err){
    if (err){
        console.log("Error here");
    } else{
        console.log("File created!");
    }
}
fs.writeFile("first.txt", "Hello world from node.js", myCallback)