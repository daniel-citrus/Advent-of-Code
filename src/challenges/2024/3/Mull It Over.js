import input from './input.txt';

console.log(solve(input));

function solve() {
    const instances = findInstances(input);
    const params = extractParams(instances);
    const total = mulAll(params);

    return total;
}

function findInstances(input) {
    return input.match(/mul\(\d+,\d+\)/g);
}

function extractParams(instances) {
    const regex = /\d+,\d+/g;
    const result = [];

    let params = [];

    for (let instance of instances) {
        params.push(instance.match(regex));
    }

    for (let param of params) {
        param = param[0].split(',');
        param = param.map((elem) => +elem);
        result.push(param);
    }

    return result;
}

function mulAll(params) {
    return params.reduce(
        (total, current) => total + current[0] * current[1],
        0
    );
}

/* module.exports = { findInstances, extractParams, mulAll }; */
