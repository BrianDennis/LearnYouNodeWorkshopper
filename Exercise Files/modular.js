 var myModule = require('./myMod.js');
 var directoryPath = process.argv[2];
 var extension = process.argv[3];

 myModule(directoryPath, extension, callback);

 function callback(err, data){
   if (err){
     console.log('an error occured....');
   }
   else{
     if (data.length >= 1){
       for (var i = 0; i < data.length; i++){
         console.log(data[i]);
       }
     }
   }
 }
