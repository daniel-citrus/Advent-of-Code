import { merge } from './mergeSort';

const arrayTests = [
    {
        param1: [1, 5, 8, 45, 60],
        param2: [2, 5, 10, 12, 90],
        result: [1, 2, 5, 5, 5, 8, 10, 12, 45, 60, 90],
    },
    {
        param1: [0, 6, 8, 55, 65],
        param2: [4, 5, 13, 15, 90],
        result: [0, 4, 5, 6, 8, 13, 15, 55, 65, 90],
    },
];

describe('merge', () => {
    test('combine two sorted arrays into one sorted array', () => {
        for (let arrayTest of arrayTests) {
            expect(merge(arrayTest.param1, arrayTest.param2)).toBe(
                arrayTest.result
            );
        }
    });
});
