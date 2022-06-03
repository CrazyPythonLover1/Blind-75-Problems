# time complexity - o(n) | space complexity - o(n)
class Solution:
    def containsDuplicate(self, nums):
        hashset = set()
        for n in nums:
            if  n in hashset:
                return True
            hashset.add(n)
        return False

# result = Solution()
# a = result.containsDuplicate([1,3,4,1])
# print(a)


# result2 = Solution()
# b = result2.containsDuplicate([1,4,5,6,7,9])
# print(b)