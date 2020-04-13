const caesar = function(str, offset) {
    letters = str.split("")
    letters = letters.map(letter => {
        code = letter.charCodeAt(0)
        newCode = (codeConvert(code, offset))
        return String.fromCharCode(newCode)
    })
    return letters.join('')
}

const codeConvert = function(uC, offset) {
    if (uC.between(65, 90) && offset > 0) {
        return  65 + (uC - 65 + offset) % 26
    } else if (uC.between(65, 90) && offset < 0) {
        return 90 - (90 - uC - offset % 26) % 26
    } else if (uC.between(97, 122) && offset > 0) {
        return 97 + (uC - 97 + offset) % 26
    } else if (uC.between(97, 122) && offset < 0) {
        return 122 - (122 - uC - offset % 26) % 26
    } else {
        return uC
    }
}

Number.prototype.between = function(a,b) {
    return (this >= a && this <= b);
}

module.exports = caesar

// challenges I had:
// choosing between if / switch statements
// learning syntax for adding function to Number class
// figuring out the formulas for handling (5) different cases