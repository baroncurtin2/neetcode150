import {
    solution1,
    solution2,
    solution3,
} from '../../src/arraysAndHashing/contains-duplicate';

describe('testing contains duplicates solutions part 1', () => {
    test('running [1,2,3,1] should result in true', () => {
        const nums: number[] = [1, 2, 3, 1];

        expect(solution1(nums)).toBe(true);
        expect(solution2(nums)).toBe(true);
        expect(solution3(nums)).toBe(true);
    });
});

describe('testing contains duplicates solutions part 2', () => {
    test('running [1,2,3,4] should result in false', () => {
        const nums: number[] = [1, 2, 3, 4];

        expect(solution1(nums)).toBe(false);
        expect(solution2(nums)).toBe(false);
        expect(solution3(nums)).toBe(false);
    });
});

describe('testing contains duplicates solutions part 3', () => {
    test('running [1,1,1,3,3,4,3,2,4,2] should result in true', () => {
        const nums: number[] = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

        expect(solution1(nums)).toBe(true);
        expect(solution2(nums)).toBe(true);
        expect(solution3(nums)).toBe(true);
    });
});
