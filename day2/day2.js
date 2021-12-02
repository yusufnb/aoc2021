const fs = require('fs');

let lines = fs.readFileSync('./input.txt')
        .toString()
        .split('\n');


function part1(lines) {
    let last = lines.map(l => l.split(' '))
        .reduce((acc, [cmd, val]) => {
            if (cmd === 'forward') acc.pos += val*1;
            if (cmd === 'up') acc.depth -= val*1;
            if (cmd === 'down') acc.depth += val*1;
            return acc;
        }, {pos: 0, depth: 0});

    return last.pos * last.depth;
}

function part2(lines) {
    let last = lines.map(l => l.split(' '))
        .reduce((acc, [cmd, val]) => {
            if (cmd === 'forward') {
                acc.pos += val*1;
                acc.depth += acc.aim * val*1;
            }
            if (cmd === 'up') acc.aim -= val*1;
            if (cmd === 'down') acc.aim += val*1;
            return acc;
        }, {pos: 0, depth: 0, aim: 0});

    return last.pos * last.depth;
}

console.log('part1', part1(lines));
console.log('part2', part2(lines));