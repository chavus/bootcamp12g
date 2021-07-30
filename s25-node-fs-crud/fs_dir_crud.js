const fs = require("fs");


function createDir(path){
    fs.mkdir(path, {recursive:true}, (err)=>{
        if (err){
            console.log(err);
        }else{
            console.log(`Path ${path} created`);
        }
    })
};


function createFile(pathAndFileName, content){
    fs.writeFile(pathAndFileName, content,(err)=>{
        if (err) throw err;
        console.log(`File ${pathAndFileName} successfully created`);
    })
}


function removeDir(path){
    fs.rmdir(path, {recursive:true}, (err)=>{
        if (err) throw err;
        console.log(`Dir ${path} successfully deleted`)
    })
}

// createDir('fs_temp_2')
// createFile('fs_temp_2/koders.txt',"Hello Koders")
removeDir('fs_temp_2')



// fs.writeFile("files/second2.txt", "Hello world from node.js", "utf8", myCallback)