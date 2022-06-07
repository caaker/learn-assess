function fibo(n) {
  if( n === 0 || n === 1 ) {
    return n;
  }
  let prev1 = 0;
  let prev0 = 1;
  let sum;
  while(n-- > 1) {
    sum = prev0 + prev1;
    prev0 = sum;
    prev1 = prev0;
  }
  return sum;
}

function fiboR(n) {

  // base case
  if( n === 0 || n === 1 ) {
    return n;

  // iterative case
  } else if ( n > 1 ) {
    return fiboR(n-1) + fiboR(n-2);
  }
}

console.log(fibo(8));

/*

Time Complexity
--------------------
  - Iterative shows linear time complexity - O(n)
  - Recursive shows exponential time complexity - O(1.62^n)
    The function is called twice for each initial call; draw out function calls to see growth

Notes | Links
--------------------
The Fibonacci sequence is defined recursively as follows fibo(n) = fibo(n-1) + fibo(n-2)
and follows this pattern:
n = 0 | 0
n = 1 | 1
n = 2 | 1
n = 3 | 2
n = 4 | 3
n = 5 | 5
n = 6 | 8

*/
