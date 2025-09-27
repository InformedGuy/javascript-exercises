const reverseString = function(text) {

    const newText = text.split("");
    console.log(newText);
    newText.reverse();
    console.log(newText);
    return newText.join("");

};

// Do not edit below this line
module.exports = reverseString;
