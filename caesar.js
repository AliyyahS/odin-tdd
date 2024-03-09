function caesarCipher(input, key) {
    key = key % 26
    input = input.split('')

    let output = ''

    for (let char of input) {
        let asciiCode = char.charCodeAt(0)
        let newCode = asciiCode + key
        let newChar = ''

        if ((asciiCode > 64 && asciiCode < 91) || (asciiCode > 96 && asciiCode < 123)) {
            if ((asciiCode < 91 && newCode > 90) || (asciiCode > 96 && newCode > 122)) newCode -= 26
            newChar = String.fromCharCode(newCode)
        } else newChar = char

        output += newChar
    }

    return output
}

module.exports = caesarCipher