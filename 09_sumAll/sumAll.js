const sumAll = function(first, second) {

    const arr = [first, second];

    const invalid = arr.filter(item => item < 0 || !Number.isInteger(item));
    if (invalid.length > 0) {
        return "ERROR";
    }

    arr.sort((a, b) => a - b);

    let sum = 0;

    for (let i = arr[0]; i <= arr[1]; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
