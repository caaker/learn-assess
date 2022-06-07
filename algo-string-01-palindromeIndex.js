import { performance } from 'perf_hooks';

function palindromeIndex(string) {
  if(isPalindrome(string)) {
    return -1
  }
  for(let i = 0; i < string.length; i++) {
    let new_string = removeCharacter(string, i);
    if(isPalindrome(new_string)) {
      return i;
    }
  }
  return -1;
}

function removeCharacter(string, i) {
  return string.slice(0, i) + string.slice(i + 1);
}

function isPalindrome(string) {
  for(let i = 0; i < string.length / 2; i++) {
    if(string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindromeIndex('aacbbaa'));

/*

Time Complexity
--------------------
  - brute force O(n^2)
  - sliding window

Notes | Links
--------------------
  - Determine if a palindrome can be formed by removing one letter.

*/