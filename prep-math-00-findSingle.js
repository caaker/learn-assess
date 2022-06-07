function findSingle(arr) {
  let res = 0;
  for(let i = 0; i < arr.length; i++) {
    res = res ^ arr[i];
  }
  return res;
}

// console.log(findSingle([1, 1, 2, 4, 2, 3, 3]));
// console.log(2 ^ 2 ^ 2 ^ 2);
/*

Question
--------------------
Given an array of n numbers find the unique number with only one occurrence.  The rest have two occurrences or even number occurrences.
Hacker Rank - Week 1 - Day 1

Time Complexity
--------------------
O(n)

Notes
--------------------
Note exclusive or'ing a number with itself will produce 0.
1 ^ 1 is equal to 0, 2 ^ 2 is equal to 0, etc.

*/