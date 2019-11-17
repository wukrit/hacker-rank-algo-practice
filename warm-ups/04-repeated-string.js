'use strict';

const fs = require('fs');

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

const aCount = arr => arr.filter(l => l === 'a').length
// Complete the repeatedString function below.
function repeatedString(s, n) {
    let splitStr = s.split('')
    let fullStrings = Math.floor(n / splitStr.length)
    let lastString = (n % splitStr.length != 0) ? n % splitStr.length : null
    let x = aCount(splitStr)
    let y = lastString !== null ? aCount(splitStr.slice(0,lastString)) : 0
    return (x * fullStrings) + y
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
