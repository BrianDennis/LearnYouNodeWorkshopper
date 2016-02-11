function countWords(inputWords) {

  return inputWords.reduce(function(prev, curr, index, array){

    if(prev[curr]){
      prev[curr] = prev[curr] + 1;
    }
    else{
      prev[curr] = 1;
    }

    return prev;
  },{});
 }

 module.exports = countWords;
