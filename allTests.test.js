const capitalize = require('./capitalize')
const reverseStr = require('./reverseStr')
const calculator = require('./calculator')
const caesarCipher = require('./caesar')
const analyzeArray = require('./analyzeArray')

test('candy to CANDY', () => {
    expect(capitalize('candy')).toBe('CANDY')
})

test('hello to olleh', () => {
    expect(reverseStr('hello')).toBe('olleh')
})

test('Hola, mi amigo to ogima im ,aloH', () => {
    expect(reverseStr('Hola, mi amigo')).toBe('ogima im ,aloH')
})

test('4 + 4 = 8', () => {
    expect(calculator.add(4, 4)).toBe(8)
})

test('82 - 8 = 74', () => {
    expect(calculator.subtract(82, 8)).toBe(74)
})

test('96 / 4 = 24', () => {
    expect(calculator.divide(96, 4)).toBe(24)
})

test('28930 / 0 is invalid', () => {
    expect(calculator.divide(28930, 0)).toBe('Invalid')
})

test('22 * 4 = 88', () => {
    expect(calculator.multiply(22, 4)).toBe(88)
})

test('Hello! to Mjqqt!', () => {
    expect(caesarCipher('Hello!', 31)).toBe('Mjqqt!')
})

test('blaze to lvkjo', () => {
    expect(caesarCipher('blaze', 10)).toBe('lvkjo')
})

test('correct analysis', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        "average": 4,
        "min": 1,
        "max": 8,
        "length": 6
    })
})