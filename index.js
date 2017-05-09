function doubleArray(array) {
    const result = array.map(function(x) {
        return x * 2;
    });

    return result;
}

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function positiveOnly(array) {
    const result = array.filter(function(x) {
        return x > 0;
    });

    return result;
}

function isEmptyCharacter(character) {
    return character === ' ';
}

function getStringReversed(word) {
    const result = word
        .toLowerCase()
        .split('')
        .reverse()
        .filter(function(letra) {
            return letra !== ' ';
        })
        .join('');

    return result;
}

function getStringNoSpaces(word) {
    const result = word
        .toLowerCase()
        .split('')
        .filter(function(letra) {
            return letra !== ' ';
        })
        .join('');

    return result;
}

function isPalindrome(word) {
    const normal = getStringNoSpaces(word);
    const backwards = getStringReversed(word);
    let index = normal.length;

    for(let i = 0; i < normal.length; i++) {
        if (normal[i] !== backwards[index]) {
            return false
        }

        index--;
    };

    return true;
}

module.exports = {
    doubleArray,
    sum,
    subtract,
    positiveOnly,
    isEmptyCharacter,
    isPalindrome,
    getStringReversed,
    getStringNoSpaces
};
