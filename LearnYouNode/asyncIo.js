var fs = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath,callback);

function callback(err,data){
    if(!err){
      var stringBuffer = data.toString();
      var newLineArray = stringBuffer.split('\n');
      console.log(newLineArray.length-1);
    }
}
