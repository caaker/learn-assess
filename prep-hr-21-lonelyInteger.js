function lonelyinteger(a) {
  let ret = a[0]
  for(let i = 1; i < a.length; i++) {
    ret = ret ^ a[i];
  }
  return ret;
}

/*

Question
--------------------
Given an array of integers, where all elements but one occur twice, find the unique element.

Time Complexity
--------------------

Notes
--------------------

*/

