function Analysis(avg, min, max, length) {
    this.average = avg
    this.min = min
    this.max = max
    this.length = length
}

function analyzeArray(arr) {
    const sum = arr.reduce((total, current) => {
        return total + current
    }, 0)

    const length = arr.length
    const avg = sum / length
    const min = Math.min.apply(null, arr)
    const max = Math.max.apply(null, arr)

    return new Analysis(avg, min, max, length)
}

module.exports = analyzeArray