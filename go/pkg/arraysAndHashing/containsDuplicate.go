package arraysAndHashing

import (
	"sort"
)

func Solution1(nums []int) bool {
	// Time: O(n^2) | Space: O(1)
	n := len(nums)

	for i := 0; i < n-1; i++ {
		for j := i + 1; j < n; j++ {
			if nums[i] == nums[j] {
				return true
			}
		}
	}

	return false
}

func Solution2(nums []int) bool {
	// Time: O(nlogn) | Space: O(1)
	n := len(nums)
	sort.Ints(nums)

	for i := 0; i < n-1; i++ {
		if nums[i] == nums[i+1] {
			return true
		}
	}

	return false
}

func Solution3(nums []int) bool {
	// Time: O(n) | Space: O(n)
	hashset := make(map[int]bool)

	for _, num := range nums {
		if _, inSet := hashset[num]; inSet {
			return true
		}

		hashset[num] = true
	}

	return false
}
