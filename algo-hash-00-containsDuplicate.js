const containsDuplicate = function(nums) {
  let i = 0;
  const hash = {}
  while(i < nums.length) {
    if(hash[nums[i]]) {
      return true;
    }
    hash[nums[i]] = true;
    i++;
  }
  return false;
};

console.log(containsDuplicate([1,2,3,1]));

/*

Question
--------------------


Time Complexity
--------------------
O(n)

*/