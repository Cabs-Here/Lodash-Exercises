
var _ = {
    clamp: function(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);

        return clampedValue;
    },
    inRange: function(number, start, end) {
        if (end == undefined) {
            end = start;
            start = 0;
        }
        if (start > end) {
            let tempEnd = end;
            end = start;
            start = tempEnd;
        }
       
        return number >= start && number < end ? true : false;
    },
    words: function(str) {
        return str.split(' ');
    },
    pad: function(str, length) {
        if (length <= str.length) {
            return str;
        }
        let startPaddingLength = Math.floor((length - str.length) / 2);

        let endPaddingLength = length - str.length - startPaddingLength;

        let space = ' ';
        let paddedString = space.repeat(startPaddingLength) + str + space.repeat(endPaddingLength);
        return paddedString;
    },
    has: function(obj, key) {
        let hasValue = obj[key] == undefined ? false : true;
        return hasValue;
    },
    invert: function(obj) {
        let result = {};
        for (const key in obj) {
            let originalValue = obj[key];
            result.originalValue = key;
        }
        return result;
    },
    findKey: function(obj, predicate)  {
        for (const key in obj) {
            if (predicate(obj[key])) {
                return key;
            }
        }
        return undefined;
    },
    drop(arr, n) {
        if (n == undefined) {
            n = 1;
        }
        let result = arr.slice(n, arr.length);
        return result;
    },
    dropWhile(arr, predicate) {
        const cb = (element, index) => {
            return !predicate(element, index, arr);
        };
        let dropNumber = arr.findIndex(cb);
        let droppedArray = this.drop(arr, dropNumber);
        return droppedArray;
    },
    chunk: function(arr, size=1) {
        if (size == undefined) {
            size = 1;
        }
        result = [];
        for (let i = 0; i < arr.length; i += size) {
            let arrayChunk = arr.slice(i, i + size);
            result.push(arrayChunk);
        }
        return result; 
    }
};



// Do not write or modify code below this line.
module.exports = _;