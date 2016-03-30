exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  },
  wordWrap: function(str, cols) {
    var i = 0;
    while (i < cols) {
      str = str.replace(/\s/g, '\n');
      i++;
      }
    return str;
  },
  reverseString: function(str) {

    var result = str.split('').reverse().join('');
    return result;

    }
};
