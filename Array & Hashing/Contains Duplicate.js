/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Time & Space complexity O(n)
 var containsDuplicate = function(nums) {
  const hashset = new Set();
  for (i = 0; i<nums.length; i++) {
      if (hashset.has(nums[i])) return true;
      hashset.add(nums[i]);
  }
  return false;
};

// Time complexity O(n*2) Space complexity O(1)

 var containsDuplicate = function(nums) {
  // const hashset = new Set();
  for (i = 0; i<nums.length; i++) {
      for (j=i+1; j<nums.length; j++) {
          if (nums[i] === nums[j]) {
              return true;
          }
      }
  }
  return false;
};