function plusMinus(arr, n) {
  let pos = 0;
  let neg = 0;
  let zer = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      pos += 1;
    }
    if(arr[i] < 0) {
      neg += 1;
    }
    if(arr[i] === 0) {
      zer += 1;
    }
  }

  // is this an eslint error - no semicolon not flagged
  pos = (pos / n).toFixed(6)
  neg = (neg / n).toFixed(6);
  zer = (zer / n).toFixed(6);
  console.log(pos);
  console.log(neg);
  console.log(zer);
}
plusMinus([-4, 3, -9, 0, 4, 1], 6)

/*

Question
--------------------
Given an array of integers, calculate the ratios of its elements that are positive,
negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

Time Complexity
--------------------
O(n)

Notes
--------------------

*/

