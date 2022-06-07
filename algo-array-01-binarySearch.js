function binarySearch(array, target) {
  let min = 0;
  let max = array.length - 1;
  while(min <= max) {
    const mid = Math.round((min + max) / 2);
    if(target === array[mid]) {
      return mid;
    }
    if(target < array[mid]) {
      max = mid - 1;
    }
    if(target > array[mid]) {
      min = mid + 1;
    }
  }
  return -1;
}

/*

Time Complexity
--------------------
  - O(log(n))

Notes | Links
--------------------
https://en.wikipedia.org/wiki/Binary_search_algorithm

*/
