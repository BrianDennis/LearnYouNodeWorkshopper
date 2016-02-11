function doubleAll(numbers) {
    numbers =  numbers.map(function(curr, index, array){
        return curr*2;
      });

      return numbers;

    }

    module.exports = doubleAll
