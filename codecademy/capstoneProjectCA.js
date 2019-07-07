const _ = {
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower)
        let clampedValue = Math.min(lowerClampedValue, upper)
        return clampedValue
    },

    inRange(number, start, end) {
        let startVal = Math.min(start, end);
        let endVal = Math.max(start, end);

        if (end === null) {
            end = start;
            start = 0;
        };
        if (number < startVal || number >= endVal) {
            return false
        } else {
            return true
        }
    },

    words(string) {
        return string.split(' ')
    },

    pad(string, totalChar) {
        if (string.length > totalChar) {
            return string
        }
        let padding = (totalChar - string.length) / 2;
        let newString = (' ').repeat(Math.floor(padding)) + string +
            (' ').repeat(Math.ceil(padding));
        return newString
    },

    has(object, key) {
        let hasValue = Object.keys(object).toString()

        if (hasValue === key) {
            return true
        } else {
            return false
        }
    },

    invert(object) {
        newObj = {};

        for (let [key, value] of Object.entries(object)) {
            newObj[value] = key;
        }
        return newObj
    },

    findKey(object, predicate) {
        for (let [key, value] of Object.entries(object)) {
            let result = predicate(value);
            if (result === true) {
                return key;
                break;
            }
        }
    },

    drop(array1, number) {
        if (number === undefined) {
            return array1.splice(1, array1.length)
        } else {
            return array1.splice(number, array1.length)
        }
    },

    dropWhile(array2, predicate) {
        let dropNumber = array2.findIndex(
            function (element, index) {
                !predicate(element, index, array2);
            })
        let droppedArray = this.drop(array2, dropNumber - 1)
        return droppedArray
    },

    chunk(array3, size) {
        if (size === undefined) {
            size = 1;
        }
        arrayChunks = []
        while (size < array3.length + 1) {
            let newArray = array3.slice(0, size);
            arrayChunks.push(newArray);
            array3 = array3.slice(size)
        }
        if (size > array3.length && array3.length !== 0) {
            arrayChunks.push(array3)
        }
        return arrayChunks
    }
}

// Do not write or modify code below this line.
module.exports = _;