'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const contains_duplicate_1 = require('../../src/arraysAndHashing/contains-duplicate');
describe('testing contains duplicates solutions part 1', () => {
    test('running [1,2,3,1] should result in true', () => {
        const nums = [1, 2, 3, 1];
        expect((0, contains_duplicate_1.solution1)(nums)).toBe(true);
        expect((0, contains_duplicate_1.solution2)(nums)).toBe(true);
        expect((0, contains_duplicate_1.solution3)(nums)).toBe(true);
    });
});
describe('testing contains duplicates solutions part 2', () => {
    test('running [1,2,3,4] should result in false', () => {
        const nums = [1, 2, 3, 4];
        expect((0, contains_duplicate_1.solution1)(nums)).toBe(false);
        expect((0, contains_duplicate_1.solution2)(nums)).toBe(false);
        expect((0, contains_duplicate_1.solution3)(nums)).toBe(false);
    });
});
describe('testing contains duplicates solutions part 3', () => {
    test('running [1,1,1,3,3,4,3,2,4,2] should result in true', () => {
        const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
        expect((0, contains_duplicate_1.solution1)(nums)).toBe(true);
        expect((0, contains_duplicate_1.solution2)(nums)).toBe(true);
        expect((0, contains_duplicate_1.solution3)(nums)).toBe(true);
    });
});
