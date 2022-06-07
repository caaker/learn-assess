function factorial(n) {
  if(n === 0 || n === 1 ) {
    return 1;
  }
  let value = n;
  while(n-- >= 2) {
    value = value * n;
  }
  return value;
}

function factorialR(n) {
  if( n === 0 || n === 1 ) {
    return 1;
  } else {
    return n * factorialR(n - 1);
  }
}

console.log(factorial(3));

/*

Notes | Time Complexity
--------------------
Factorial is defined recursively as fact(n) = n * fact(n - 1) and follows this pattern:
0! = 1
1! = 1
2! = 2
3! = 6
4! = 24
5! = 120

Both recursive and iterative functions show a time complexity of O(n)

Links
--------------------
https://en.wikipedia.org/wiki/Factorial

*/
