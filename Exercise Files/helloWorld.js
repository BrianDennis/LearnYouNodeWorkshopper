var argsArray = process.argv;

if (argsArray.length > 1){
  var total = 0;
  for (var i = 2; i < argsArray.length; i++){
    total += +argsArray[i];
  }
  console.log(total);
}
else{
  console.log(0);
}
