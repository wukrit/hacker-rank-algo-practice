'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function hourGlassSum(arr, x, y) {
    let sum = arr[x][y]
    for (let i = -1; i < 2; i ++) {
        sum += arr[x + 1][y + i]
        sum += arr[x - 1][y + i]
    }
    return sum
}

function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let maxSum = Number.NEGATIVE_INFINITY
    for (let row = 1; row <= 4; row ++) {
        for (let col = 1; col <= 4; col ++) {
            let sum = hourGlassSum(arr, row, col)
            sum > maxSum ? maxSum = sum : null
        }
    }
    console.log(maxSum)
}
