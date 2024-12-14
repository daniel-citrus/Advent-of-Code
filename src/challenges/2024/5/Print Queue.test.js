const valid = require('./Print Queue Test');
const rules = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13`;

describe('validator', () => {
    test('updates are valid', () => {
        expect(valid('75,47,61,53,29', rules)).toBe(true);
        expect(valid('97,61,53,29,13', rules)).toBe(true);
        expect(valid('75,29,13', rules)).toBe(true);
    });
    test('updates are invalid', () => {
        expect(valid('75,97,47,61,53', rules)).toBe(false);
        expect(valid('61,13,29', rules)).toBe(false);
        expect(valid('97,13,75,29,47', rules)).toBe(false);
    });
});
