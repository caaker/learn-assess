
var generate = function(n) {
  const matrix = [[1], [1, 1]];

  // base case : n = 1
  if(n === 1) {
    return [[1]];
  }

  // base case : n = 2
  if(n === 2) {
    return matrix;
  }

  // first iterative case : n = 3, i is the row to generate
  for(let i = 2; i < n; i++) {

    // add empty row
    matrix[i] = [];

    // j is the column in row i
    for(let j = 0; j <= i; j++) {

      // if first or last element set to 1
      if( j === 0 || j === i ) {
        matrix[i][j] = 1;

      // internal elements are simply adding the upper internal elements
      // draw out on paper to see the obviousness of the indexing
      } else {
        matrix[i][j] = matrix[i-1][j-1] + matrix[i-1][j];
      }
    }
  }
  return matrix;

};


/*

Question
--------------------
In Pascal's triangle, each row is calculated by adding values from the row above it
It beings with [[1], [1, 1]]
In this example from leetcode row indexing start at 1

Time Complexity
--------------------

Notes | Links
--------------------

*/
