function reverseArray(arr) {
  const length = arr.length;
  for(let i = 0; i < Math.floor(length / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[length - 1 - i]
    arr[length - 1 - i] = temp;
  }
  return arr;
}

console.log(reverseArray([0]));
console.log(reverseArray([0, 1]));
console.log(reverseArray([0, 1, 2]));
console.log(reverseArray([0, 1, 2, 3]));
console.log(reverseArray([0, 1, 2, 3, 4]));

/*

Time Complexity
--------------------
O(n)

Test Cases
--------------------
[ 0 ]         // will swap 0 and 0, extra swap
[ 0, 1 ]      // will swap 0 and 1
[ 0, 1, 2 ]   // will swap 1 and 2, will swap 1 and 1, extra swap

Use Math.floor() to get rid of extra swap
 - Math.floor() will always bring to bottom integer
 - Math.ceil() and Math.round() will always bring to upper integer in this case

*/