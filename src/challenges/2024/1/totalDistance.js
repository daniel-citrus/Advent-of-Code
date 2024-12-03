import input from './input.txt';
import { merge, mergeSort } from './mergeSort';

let list1 = [];
let list2 = [];

const lines = input.split(/\n/);

// extract data
for (let line of lines) {
    const items = line.replace(/\r/, '').split('   ');
    list1.push(items[0]);
    list2.push(items[1]);
}

// sort left and right lists
list1 = mergeSort(list1);
list2 = mergeSort(list2);

// calculate distance (positive integer) between each element on the same index
const distances = calculateDistance(list1, list2);

// sum total distance
const totalDistance = distances.reduce((sum, current) => sum + current, 0);

// ANSWER
/* console.log(totalDistance); */

function calculateDistance(list1, list2) {
    if (list1.length !== list2.length) {
        return null;
    }

    const distances = [];

    for (let i = 0; i < list1.length; i++) {
        distances.push(Math.abs(list1[i] - list2[i]));
    }

    return distances;
}
