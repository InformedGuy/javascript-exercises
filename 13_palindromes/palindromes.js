const palindromes = function (string) {
    
    let formattedString = formatString(string);

    let reversed = formattedString.split("").reverse().join("");

    return formattedString === reversed;

};

function formatString(string) {
    const invalid = /[^a-z0-9]/g;
    return string.toLowerCase().replace(invalid, "");
}

// Do not edit below this line
module.exports = palindromes;
