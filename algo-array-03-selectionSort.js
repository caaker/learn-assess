function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let min = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[i]) {
        min = j;
      }
    }
    swap(arr, i, min);
  }
  return arr;
}

const test = [3, 2, 1, 0];
console.log(selectionSort(test));

/*

Time Complexity
--------------------
O(n^2)

*/