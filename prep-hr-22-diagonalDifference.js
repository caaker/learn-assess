function diagonalDifference(matrix, len) {
  let left = 0;
  let right = 0;
  for(let i = 0; i < len; i++) {
    left = left + matrix[i][i];
    right = right + matrix[i][len -1 - i]
  }
  return Math.abs(left - right);
}

/*

Question
--------------------
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

Time Complexity
--------------------

Notes
--------------------

*/
