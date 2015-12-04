module.exports = function(dirPath, extension, callback){

  var fs = require('fs');
  var path = require('path');

  var tempCall = function(err, data){
    if(err){
      return callback(err);
    }
    else{

      var returnList = [];

      if (data.length >= 1){

        for (var i = 0; i < data.length; i++){

          if (path.extname(data[i]) === ('.' + extension)){
            returnList.push(data[i]);
          }
        }
      }

      return callback(null, returnList);

    }
  }

 fs.readdir(dirPath, tempCall);

};
