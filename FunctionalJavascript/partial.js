var slice = Array.prototype.slice

    function logger(namespace) {
      return function(){
        var newArgs = slice.apply(arguments);
        newArgs.unshift(namespace);
        console.log.apply(null, newArgs);
      }
    }

    module.exports = logger
