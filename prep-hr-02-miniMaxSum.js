function miniMaxSum(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  arr.forEach((val)=>{
    sum += val;
    if(val < min) {
      min = val;
    }
    if(val > max) {
      max = val;
    }
  });
  console.log(sum - max + ' ' + sum - min);
}

/*

Question
--------------------
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Time Complexity
--------------------
O(n)

Notes
--------------------

*/
