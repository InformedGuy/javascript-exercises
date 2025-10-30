const fibonacci = function(member) {

    // Return the nth member of the fibonacci series

    if (member < 0) {
        return "OOPS";
    }

    let array = [0, 1];

    if (member > 1) {
        for (let i = 2; i <= member; i++) {
            let newNumber = array[i - 1] + array[i - 2];
            array.push(newNumber);
        }
    }

    return array[member];

};

// Do not edit below this line
module.exports = fibonacci;
