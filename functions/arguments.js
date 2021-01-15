//multiple arguments 
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

//default arguments 
let getScoreText = function (name = "Anonymous", score = 0) { //-> set default value
    return "Name: " + name + " Score: " + score 
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// tip calculator 
let getTip = function (total, tipPercent = .2) { 
    percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% on $${total} would be ${tip}`
}

let tip = getTip(40, 0.25)
console.log(tip)

//Template Strings 
let name = "chloe"
console.log(`My name is ${name}`)