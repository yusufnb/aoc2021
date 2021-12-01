const fs = require('fs');

let data = fs.readFileSync('./input.txt').toString().split('\n').map(l => l*1);

function part1() {
    let curr = data[0];
    let count = 0;
    for (let i = 1; i< data.length; i++) {
        if (data[i] > curr) count++;
        curr = data[i];
    }
    console.log('part1',count);
}

function part2() {
    let sum = data[0] + data[1] + data[2];
    let count = 0;
    for (let i = 1; i< data.length-2; i++) {
        let new_sum = sum - data[i-1] + data[i+2];
        if (new_sum > sum) count++;
        sum = new_sum;
    }
    console.log('part2',count);
}

part1();
part2();
