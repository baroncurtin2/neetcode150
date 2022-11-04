const solution1 = (nums: number[]): boolean => {
    // Time: O(n^2) | Space: O(1)

    const n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }

    return false;
};

const solution2 = (nums: number[]): boolean => {
    // Time: O(nlogn) | Space: O(1)
    const n = nums.length;
    const sortedNums = nums.sort((x, y) => x - y);

    for (let i = 0; i < n - 1; i++) {
        if (sortedNums[i] === sortedNums[i + 1]) {
            return true;
        }
    }

    return false;
};

const solution3 = (nums: number[]): boolean => {
    // Time: O(n) | Space: O(n)

    const set: {[key: number]: boolean} = {};

    for (const num of nums) {
        if (num in set) {
            return true;
        }

        set[num] = true;
    }

    return false;
};

export {solution1, solution2, solution3};
