const fs = require("fs")
//import {readFile} from 'fs'

function myCallback(error, data){
    if (error){
        console.error(error);
    }else{
        console.log(data);
    }
}

fs.readFile("files/first.txt",'utf8', myCallback)