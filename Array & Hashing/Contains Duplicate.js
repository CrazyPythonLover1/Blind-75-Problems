/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  const hashset = new Set();
  for (i = 0; i<nums.length; i++) {
      if (hashset.has(nums[i])) return true;
      hashset.add(nums[i]);
  }
  return false;
};

// Time & Space complexity O(n)