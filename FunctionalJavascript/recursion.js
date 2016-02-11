function reduce(arr, fn, initial) {

  function helper(index, fn, prev, arr){

    if(index >= arr.length){
      return prev;
    }
    var newVal = fn(prev,arr[index],index,arr);
    return helper((index + 1), fn, newVal, arr);
  }

  return helper(0, fn, initial, arr);

}

module.exports = reduce
