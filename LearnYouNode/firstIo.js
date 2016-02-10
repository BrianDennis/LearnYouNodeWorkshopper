var fs = require('fs');
var filePath = process.argv[2];

var fileBuffer = fs.readFileSync(filePath);
var stringBuffer = fileBuffer.toString();
var newLineArray = stringBuffer.split('\n');
console.log(newLineArray.length-1);
