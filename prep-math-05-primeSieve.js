function sieve(n) {
  const sieve = makeSieve(n);
  for (let i = 2; i * i <= n; i++) {
    if (sieve[i]) {
      for (let j = i * i; j < n; j += i) {
        sieve[j] = false;
      }
    }
  }
  return makeResult(sieve);
};

// 2 is the first prime.
function makeSieve(n) {
  const sieve = (new Array(n)).fill(true);
  sieve[0] = false;
  sieve[1] = false;
  return sieve;
}

// turn the sieve array into primes using map and filter
function makeResult(sieve) {
  return sieve.map((val, index) => val ? index : false).filter(val => val);
}

console.log(sieve(50));

/*
prime
--------------------
https://en.wikipedia.org/wiki/Prime_number
https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

notes
____________________
 - The fundamental theorem of arithmetic states that every natural number greater than 1 can be written as
   a product of prime numbers
 - 2 is the first prime
 - After setting all multiples of 2 to false; we have are next prime 3.
 - After setting all multiples of 3 to false; we have are next prime 5.
 - continues ...
*/
