const _ = {};
//to test this instruction, run the command: node _.js

_.clamp = (num, lower, upper) => {
    num = Math.min(Math.max(num, lower), upper)
    return num
}
//to test this instruction, run the command: node clamp.js

_.inRange = (num, start, end) => {

}









// Do not write or modify code below this line.
module.exports = _;