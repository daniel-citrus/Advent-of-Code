const { moving, gradual, valid } = require('./Red-Nosed Reports');

const tests = [
    {
        report: [7, 6, 4, 2, 1],
        result: true,
        moving: true,
        gradual: true,
    },
    {
        report: [1, 2, 7, 8, 9],
        result: false,
        moving: true,
        gradual: false,
    },
    {
        report: [9, 7, 6, 2, 1],
        result: false,
        moving: true,
        gradual: false,
    },
    {
        report: [1, 3, 2, 4, 5],
        result: false,
        moving: false,
        gradual: true,
    },
    {
        report: [8, 6, 4, 4, 1],
        result: false,
        moving: false,
        gradual: false,
    },
    {
        report: [1, 3, 6, 7, 9],
        result: true,
        moving: true,
        gradual: true,
    },
];

describe('increasing or decreasing', () => {
    for (let t of tests) {
        const report = t.report;
        const result = t.moving;

        test(`${report}`, () => {
            expect(moving(report)).toBe(result);
        });
    }
});

describe('gradually moving (adjecent levels differ by 1 to 3)', () => {
    for (let t of tests) {
        const report = t.report;
        const result = t.gradual;

        test(`${report}`, () => {
            expect(gradual(report)).toBe(result);
        });
    }
});

describe('valid report', () => {
    for (let t of tests) {
        const report = t.report;
        const result = t.result;

        test(`${report}`, () => {
            expect(valid(report)).toBe(result);
        });
    }
});
