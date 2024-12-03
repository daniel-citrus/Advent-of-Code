function merge(left, right) {
    const result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    if (left.length) {
        return [...result, ...left];
    }

    if (right.length) {
        return [...result, ...right];
    }
}

function mergeSort(array) {
    if (!array) {
        return array;
    }

    if (array.length <= 1) {
        return array;
    }

    const mid = Math.ceil(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    return merge(left, right);
}

module.exports = { merge, mergeSort };
