const grid = [
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [1, 0, 0, 0],
  [1, 1, 0, 0],
];

const grid1 = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

const grid2 = [
  [1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 0],
];

const grid3 = [
  [1, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 1],
];

// findIslands iterates the entire matrix
function findIslands() {

  // count holds the number of islands
  let count = 0;

  // traverse each row
  for(let i = 0; i < grid.length; i++) {

    // traverse each column in the row
    for(let j = 0; j < grid[i].length; j++) {

      // land is found
      if(grid[i][j]) {
        count++;
        markIsland(i, j);
      }
    }
  }
  return count;
}

// recurse in all 4 directions using index math
function markIsland(i, j) {

  // base case
  // if either out of bounds or water(0) hit, do not recurse further
  if( i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === 0 ) {
    return;
  }

  // mark the entire island as water to avoid recursing it again
  grid[i][j] = 0;

  // recurse in all 4 directions
  markIsland(i-1, j);     //  up
  markIsland(i,   j+1);   //  right
  markIsland(i+1, j);     //  down
  markIsland(i,   j-1);   //  left
}

console.log(findIslands());