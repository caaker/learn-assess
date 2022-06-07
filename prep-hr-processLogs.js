const hash = {};

function init(person1, person2) {
  if(!hash[person1]) {
    hash[person1] = 0;
  }
  if(!hash[person2]) {
    hash[person2] = 0;
  }
}

// array of strings
function processLogs(logs, threshold) {
  for(let i = 0; i < logs.length; i++) {
    const arr = logs[i].split(' ');
    init(arr[0], arr[1]);
    if(arr[0] !== arr[1]) {
      hash[arr[0]] += 1;
      hash[arr[1]] += 1;
    } else {
      hash[arr[0]] += 1;
    }
  }
  let ret = [];

  Object.keys(hash).forEach((key, i) => {
    if(hash[key] >= threshold) {
      ret.push(key);
    }
  });

  return ret.sort();
}

const arr = [
  '1 2 50',
  '1 7 70',
  '1 3 20',
  '2 2 17',
  '0 0 4',
  '0 -1 4',
  '-1 0 4'
];

console.log(processLogs(arr, 2));

/*

Time Complexity
--------------------
  - O(n), as we must loop through the array one time, and loop through the hash table one time

Notes | Links
--------------------
Takes an array of strings ( or string array have you) representing user to user financial transactions
and finds users that exceed the transaction limit.
*/
