const sumAll = function(min, max) {
    //  checks for non-number entries
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";

    if(min < 0 || max < 0) return "ERROR";

    // shorthand "swap"
    if(min > max) [min, max] = [max, min];
    /*
    THE LONG WAY
    if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
    */

  // Sum the numbers
  let sum = 0;
  for(let i = min; i <= max; i++) {sum += i;}

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
