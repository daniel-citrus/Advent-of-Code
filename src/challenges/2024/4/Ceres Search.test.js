const countInstances = require('./Ceres Search');

const find = 'XMAS';
const input = `00X000
0SAMX0
0A00A0
XMAS0S
0X0000`;
const input1 = `MMMSXXMASM
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
    describe('totalInstances', () => {
        test('total', () => {
            expect(countInstances(find, input)).toBe(4);
            expect(countInstances(find, input1)).toBe(18);
        });
    });
    describe('count instances moving', () => {
        test('upLeft', () => {
            expect(countInstances(find, input, 'ul')).toBe(0);
            expect(countInstances(find, input1, 'ul')).toBe(4);
        });
        test('upRight', () => {
            expect(countInstances(find, input, 'ur')).toBe(0);
            expect(countInstances(find, input1, 'ur')).toBe(4);
        });
        test('downLeft', () => {
            expect(countInstances(find, input, 'dl')).toBe(0);
            expect(countInstances(find, input1, 'dl')).toBe(1);
        });
        test('downRight', () => {
            expect(countInstances(find, input, 'dr')).toBe(1);
            expect(countInstances(find, input1, 'dr')).toBe(1);
        });
        test('up', () => {
            expect(countInstances(find, input, 'u')).toBe(1);
            expect(countInstances(find, input1, 'u')).toBe(2);
        });
        test('left', () => {
            expect(countInstances(find, input, 'l')).toBe(1);
            expect(countInstances(find, input1, 'l')).toBe(2);
        });
        test('right', () => {
            expect(countInstances(find, input, 'r')).toBe(1);
            expect(countInstances(find, input1, 'r')).toBe(3);
        });
        test('down', () => {
            expect(countInstances(find, input, 'd')).toBe(0);
            expect(countInstances(find, input1, 'd')).toBe(1);
        });
    });
});
