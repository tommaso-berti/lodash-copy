const _ = {};
//to test this instruction, run the command: node test/lodash.js

_.clamp = (num, lower, upper) => {
    num = Math.min(Math.max(num, lower), upper)
    return num
}
//to test this instruction, run the command: node test/clamp.js

_.inRange = (num, start, end) => {
    if(!end) {
        end = start;
        start = 0;
    }
    if (start > end) [start, end] = [end, start]
    return (num >= start) && (num < end)
}

_.words = (str) => {}

console.log(_.inRange(5, 10, 6)) // true







// Do not write or modify code below this line.
module.exports = _;