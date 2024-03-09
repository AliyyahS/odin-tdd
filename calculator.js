class Calc {
    add(a, b) {
        return a + b
    }

    subtract(a, b) {
        return a - b
    }

    divide(a, b) {
        if (b === 0) return 'Invalid'
        return a / b
    }

    multiply(a, b) {
        return a * b
    }
}

const calculator = new Calc()

module.exports = calculator