const { sort } = require('css-loader/dist/utils');
const { merge, mergeSort } = require('./mergeSort');

const mergeTests = [
    {
        param1: [1, 5, 8, 45, 60],
        param2: [2, 5, 10, 12, 90],
        result: [1, 2, 5, 5, 8, 10, 12, 45, 60, 90],
    },
    {
        param1: [0, 6, 8, 55, 65],
        param2: [4, 5, 13, 15, 90],
        result: [0, 4, 5, 6, 8, 13, 15, 55, 65, 90],
    },
];

describe('merge', () => {
    for (let mergeTest of mergeTests) {
        const param1 = mergeTest.param1;
        const param2 = mergeTest.param2;
        const result = mergeTest.result;

        test(`combine ${param1} and ${param2} into one sorted array`, () => {
            expect(merge(param1, param2)).toEqual(result);
        });
    }
});

const sortTests = [
    {
        input: null,
        result: null,
    },
    {
        input: [],
        result: [],
    },
    {
        input: [58, -548, 5, -2, 1, 65],
        result: [-548, -2, 1, 5, 58, 65],
    },
    {
        input: [5, 2, 8, 1, 9],
        result: [1, 2, 5, 8, 9],
    },
    {
        input: [429, 586, 556, 201, 722, 591, 817],
        result: [201, 429, 556, 586, 591, 722, 817],
    },
    {
        input: [647, 334, 341, 451, 751, 535, 676],
        result: [334, 341, 451, 535, 647, 676, 751],
    },
    {
        input: [117, 951, 569, 313, 517, 607, 982],
        result: [117, 313, 517, 569, 607, 951, 982],
    },
    {
        input: [751, 629, 694, 699, 929, 12, 698],
        result: [12, 629, 694, 698, 699, 751, 929],
    },
    {
        input: [107, 317, 321, 146, 477, 75, 693],
        result: [75, 107, 146, 317, 321, 477, 693],
    },
    {
        input: [602, 786, 498, 652, 698, 271, 243],
        result: [243, 271, 498, 602, 652, 698, 786],
    },
    {
        input: [730, 188, 918, 513, 235, 502, 306],
        result: [188, 235, 306, 502, 513, 730, 918],
    },
    {
        input: [255, 81, 244, 947, 772, 197, 492],
        result: [81, 197, 244, 255, 492, 772, 947],
    },
    {
        input: [164, 547, 870, 121, 135, 10, 653],
        result: [10, 121, 135, 164, 547, 653, 870],
    },
    {
        input: [166, 837, 254, 409, 591, 124, 578],
        result: [124, 166, 254, 409, 578, 591, 837],
    },
    {
        input: [435, 952, 319, 284, 908, 303, 146],
        result: [146, 284, 303, 319, 435, 908, 952],
    },
];

describe('mergeSort', () => {
    for (let sortTest of sortTests) {
        const input = sortTest.input;
        const result = sortTest.result;

        test(`sort ${input}`, () => {
            expect(mergeSort(input)).toEqual(result);
        });
    }
});
