const { findInstances, extractParams, mulAll } = require('./Mull It Over');

const input =
    'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))';

describe('find instances of mul(X,X) and the total sum of all multiplications', () => {
    const instances = findInstances(input);

    test('return an array of each occurence', () => {
        expect(instances).toEqual([
            'mul(2,4)',
            'mul(5,5)',
            'mul(11,8)',
            'mul(8,5)',
        ]);
    });

    const parameters = extractParams(instances);

    test('extract the mul parameters and store in a 2D Array', () => {
        expect(parameters).toEqual([
            [2, 4],
            [5, 5],
            [11, 8],
            [8, 5],
        ]);
    });

    test('calculate the product of each parameter pair then calculate the total sum', () => {
        expect(mulAll(parameters)).toBe(161);
    });
});
