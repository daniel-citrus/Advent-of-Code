const input = require('./testInput.txt');
const {
    up,
    down,
    left,
    right,
    upLeft,
    upRight,
    downLeft,
    downRight,
    countInstances,
} = require('./Ceres Search');

const find = 'XMAS';
const input = `
00X000
0SAMX0
0A00A0
XMAS0S
0X0000`;
const input1 = `
MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX
`;

describe(`find number of instances of ${find} in the input text`, () => {
    describe('count instances moving', () => {
        test('up', () => {
            expect(up(find, input)).toBe(1);
        });
        test('down', () => {
            expect(down(find, input)).toBe(0);
        });
        test('left', () => {
            expect(left(find, input)).toBe(1);
        });
        test('right', () => {
            expect(right(find, input)).toBe(1);
        });
        test('upLeft', () => {
            expect(upLeft(find, input)).toBe(0);
        });
        test('upRight', () => {
            expect(upRight(find, input)).toBe(0);
        });
        test('downLeft', () => {
            expect(downLeft(find, input)).toBe(0);
        });
        test('downRight', () => {
            expect(downRight(find, input)).toBe(1);
        });
    });
    describe('totalInstances', () => {
        test('total', () => {
            expect(countInstances(find, input)).toBe(4);
            expect(countInstances(find, input1)).toBe(18);
        });
    });
});
