//student score, total possiple score 

let gradeCalc = function (score, totalScore) {
    let percent = (score/totalScore) * 100

    if (percent >=90) {
        return `You got an A (${percent})!`
    } else if (percent >= 80) {
        return `You got an B (${percent})!`
    } else if (percent>=70) {
        return `You got an C (${percent})!`
    } else if (percent >= 60) {
        return `You got an D (${percent})!`
    } else {
        return `You got an F (${percent})!`
    }
}

let result = gradeCalc(9, 15)
console.log(result)