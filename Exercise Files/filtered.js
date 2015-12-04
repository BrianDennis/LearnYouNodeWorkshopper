var fs = require('fs');
var path = require('path');
var directoryPath = process.argv[2];
var extension = process.argv[3];

fs.readdir(directoryPath, callback);

function callback(err, fileList){
  if (!err){
    if(fileList.length >= 1){
      for(var i = 0; i < fileList.length; i++){
        if(path.extname(fileList[i]) === ('.' + extension)){
          console.log(fileList[i]);
        }
      }
    }
  }
}
