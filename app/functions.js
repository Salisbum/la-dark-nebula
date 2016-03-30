exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  isPrime : function(num) {
    if (isNaN(num) || !isFinite(num) || num % 1 || num < 2) return false;
    var m = Math.sqrt(num);
    for (var i = 2; i <= m; i++) if (num % i == 0) return false;
    return true;
  },

  arraySum : function(array) {
    var sum = 0;

    for (var i = 0, len = array.length; i < len; i++) {
      sum += array[i];
    }

    return sum;

  },

  fizzBuzz : function(num) {
    //
    // for(var i = 0; i < num;)return((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i);


    var fb = 'fizzbuzz';
    var fizz = 'fizz';
    var buzz = 'buzz';

    for (var i = 0; i <= num; i++)
    {
        if (i % 15 === 0)
            return fb;
        else if (i % 3 === 0)
            return fizz;
        else if (i % 5 === 0)
            return buzz;
        else
            return i;
    }
  }
};
