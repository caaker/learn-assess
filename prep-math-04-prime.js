function prime(n) {

  // base case - 0 and 1 are not primes
  if(n < 2) {
    return null;
  }

  // base case - first prime is 2
  const primes = [2];
  if(n === 2) {
    return primes;
  }

  // iterative cases - no even numbers are prime, check all odd numbers
  // note that continue can continue to a label and not its own for loop
  not_a_prime: for(let i = 3; i <= n; i += 2) {

    // beginning with 3 check for factors up to the square root of i
    for(let j = 3; j * j <= i; j++) {

      // if the odd number we are checking has a factor it is not a prime
      if(i % j === 0) {
        continue not_a_prime;
      }
    }

    // no factors found, it's a prime, save it
    primes.push(i);
  }
  return primes;
}

console.log(prime(50));

/*

Question
--------------------
Find primes up to n.  Note that 0 and 1 are not primes and that 2 is the first prime.


Time Complexity
--------------------
Time complexity is O(n^1.5).  The outer loop is reduced by a constant of 1/2 not included in Big O
The inner loop is reduced by the square root of n.

*/
