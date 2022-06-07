const twoSumLoop = function(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return 'not found';
};

const twoSumHash = function(nums, target) {
  const map = new Map();
  for( let i = 0; i < nums.length; i++) {
    let term = map.get(target - nums[i]);
    if(term) {
      return [term, i];
    };
    map.set(nums[i], i);
  }
  return 'not found';
};

const res = twoSumHash([2,7,11,15], 18);
console.log(res);


/*

Question
--------------------
Given an array of n numbers find the two numbers which add up to the target


Links
--------------------
https://en.wikipedia.org/wiki/Addition

*/