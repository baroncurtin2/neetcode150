use std::collections::HashSet;

pub fn solution1(nums: Vec<i32>) -> bool {
    // Time: O(n^2) | Space: O(1)
    let n = nums.len();

    for i in 0..n {
        for j in i + 1..n {
            if nums[i] == nums[j] {
                return true;
            }
        }
    }
    return false;
}

pub fn solution2(nums: Vec<i32>) -> bool {
    let mut nums_sorted = nums.clone();
    nums_sorted.sort_unstable();

    nums_sorted.iter().zip(nums_sorted.iter().skip(1)).any(|(&a, &b)| a == b)
}

pub fn solution3(nums: Vec<i32>) -> bool {
    let mut set = HashSet::with_capacity(nums.len());
    nums.iter().any(|&num| !set.insert(num))
}

#[cfg(test)]
mod contains_duplicate_tests {
    use super::*;

    #[test]
    fn test_solution1() {
        let nums = vec![1,2,3,1];
        assert_eq!(solution1(nums), true);

        let nums = vec![1,2,3,4];
        assert_eq!(solution1(nums), false);

        let nums = vec![1,1,1,3,3,4,3,2,4,2];
        assert_eq!(solution1(nums), true);
    }

    #[test]
    fn test_solution2() {
        let nums = vec![1,2,3,1];
        assert_eq!(solution2(nums), true);

        let nums = vec![1,2,3,4];
        assert_eq!(solution2(nums), false);

        let nums = vec![1,1,1,3,3,4,3,2,4,2];
        assert_eq!(solution2(nums), true);
    }

    #[test]
    fn test_solution3() {
        let nums = vec![1,2,3,1];
        assert_eq!(solution3(nums), true);

        let nums = vec![1,2,3,4];
        assert_eq!(solution3(nums), false);

        let nums = vec![1,1,1,3,3,4,3,2,4,2];
        assert_eq!(solution3(nums), true);
    }
}
