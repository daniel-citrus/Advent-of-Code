import input from './input.txt';

const list1 = [];
const list2 = [];

const lines = input.split(/\n/);

for (let line of lines) {
    const items = line.replace(/\r/, '').split('   ');
    list1.push(items[0]);
    list2.push(items[1]);
}
