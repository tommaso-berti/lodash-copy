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

_.words = (str) => {
    return str.split(' ');
}

_.pad = (string, length) => {
    if(string.length < length) {
        let diff = (length - string.length)
        let padStart = Math.floor(diff/2);
        let padEnd = padStart + diff%2;
        return (string.padEnd(padEnd + string.length)).padStart(padStart + string.length + padEnd);
    }
    else return string;
}

_.has = (object, key) => {
    return object[key] !== undefined;
}

_.invert = (object) => {
    let keyValueArr = Object.entries(object)
    let valueKeyArr= [];
     keyValueArr.forEach(([key, value]) => {
        return valueKeyArr.push([value, key])
    })
    return Object.fromEntries(valueKeyArr)
}

_.findKey = (object, predicate) => {
    for (const key in object) {
        const value = object[key];
        const predicateReturnValue = predicate(value);
        if(predicateReturnValue)
            return key;
    }
    return undefined;
}

_.drop = (array, num) => {
    num = num ?? 1;
    return array.slice(num);
}

_.dropWhile = (array, predicate) => {
    let dropNumber = array.findIndex((element, index) => !predicate(element, index, array));
    return _.drop(array, dropNumber);
}

_.chunk = (array, size = 1) => {
    let resArray = [];
    let initialSize = 0;
    let finalSize = size;
    while(initialSize < array.length) {
        let sliced = array.slice(initialSize, finalSize);
        initialSize += size;
        finalSize += size;
        resArray.push(sliced);
    }
    return resArray;
}

console.log(_.chunk([1, 2, 3, 4, 5], 2))


// Do not write or modify code below this line.
module.exports = _;