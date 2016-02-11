function duckCount() {
  return Array.prototype.filter.call(arguments,function(curr){
    console.log(curr);
    return Object.hasOwnProperty.call(curr, 'quack');
  }).length;
}

module.exports = duckCount
