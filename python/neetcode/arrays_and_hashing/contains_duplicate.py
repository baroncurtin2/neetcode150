def solution1(nums: list[int]) -> bool:
    """Time: O(n^2) | Space: O(1)"""
    n = len(nums)

    for i in range(n - 1):
        for j in range(i + 1, n):
            if nums[i] == nums[j]:
                return True

    return False


def solution2(nums: list[int]) -> bool:
    """Time: O(nlogn) | Space: O(1)"""
    n = len(nums)
    nums.sort()

    return any(nums[i] == nums[i + 1] for i in range(n - 1))


def solution3(nums: list[int]) -> bool:
    """Time: O(n) | Space: O(n)"""
    hashset = set()

    for num in nums:
        if num in hashset:
            return True
        hashset.add(num)
    return False
