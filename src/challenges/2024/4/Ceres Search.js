import input from './input.txt';

console.log(countInstances('XMAS', input));

function countInstances(search, input, direction = null) {
    search = search.split('');
    input = dataToArray(input);

    let xLen = input.length;
    let yLen = input[0].length;
    let count = 0;

    for (let x = 0; x < xLen; x++) {
        for (let y = 0; y < yLen; y++) {
            if (direction) {
                let searchFunction = searchDirection(direction);
                count += searchFunction(search, input, x, y);
            } else {
                count +=
                    up(search, input, x, y) +
                    down(search, input, x, y) +
                    left(search, input, x, y) +
                    right(search, input, x, y) +
                    upLeft(search, input, x, y) +
                    upRight(search, input, x, y) +
                    downLeft(search, input, x, y) +
                    downRight(search, input, x, y);
            }
        }
    }

    return count;
}

function searchDirection(direction) {
    switch (direction) {
        case 'u':
            return up;
        case 'd':
            return down;
        case 'l':
            return left;
        case 'r':
            return right;
        case 'ul':
            return upLeft;
        case 'ur':
            return upRight;
        case 'dl':
            return downLeft;
        case 'dr':
            return downRight;
    }
}

function dataToArray(input) {
    input = input.split('\n');

    for (let i in input) {
        input[i] = input[i].split('');
    }

    return input;
}

function down(search, input, x, y) {
    let xLen = input.length;

    if (xLen - x < search.length) {
        return 0;
    }

    for (let s of search) {
        const letter = input[x++][y];

        if (s !== letter) {
            return 0;
        }
    }

    return 1;
}

function right(search, input, x, y) {
    let yLen = input[0].length;

    if (yLen - y < search.length) {
        return 0;
    }

    for (let s of search) {
        const letter = input[x][y++];

        if (s !== letter) {
            return 0;
        }
    }

    return 1;
}

function left(search, input, x, y) {
    if (y + 1 < search.length) {
        return 0;
    }

    for (let s of search) {
        const letter = input[x][y--];

        if (s !== letter) {
            return 0;
        }
    }

    return 1;
}

function up(search, input, x, y) {
    if (x + 1 < search.length) {
        return 0;
    }

    for (let s of search) {
        const letter = input[x--][y];

        if (s !== letter) {
            return 0;
        }
    }

    return 1;
}

function downRight(search, input, x, y) {
    const xLen = input.length;
    const yLen = input[0].length;

    if (xLen - x < search.length || yLen - y < search.length) {
        return 0;
    }

    for (let s of search) {
        const letter = input[x++][y++];

        if (s !== letter) {
            return 0;
        }
    }

    return 1;
}

function downLeft(search, input, x, y) {
    const xLen = input.length;

    if (xLen - x < search.length || y + 1 < search.length) {
        return 0;
    }

    for (let s of search) {
        const letter = input[x++][y--];

        if (s !== letter) {
            return 0;
        }
    }

    return 1;
}

function upRight(search, input, x, y) {
    const yLen = input[0].length;

    if (x + 1 < search.length || yLen - y < search.length) {
        return 0;
    }

    for (let s of search) {
        const letter = input[x--][y++];

        if (s !== letter) {
            return 0;
        }
    }

    return 1;
}

function upLeft(search, input, x, y) {
    if (x + 1 < search.length || y + 1 < search.length) {
        return 0;
    }

    for (let s of search) {
        const letter = input[x--][y--];

        if (s !== letter) {
            return 0;
        }
    }

    return 1;
}

/* module.exports = countInstances; */
