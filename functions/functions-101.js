// Functionn - input {argument}, code, output {return value}

let greetUser =  function () {
    console.log("Welcome user!")
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3) 
let otherValue = square(10)

console.log(value)
console.log(otherValue)

//Convert Fahrenheit to Celsius 

let convert = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
} 

let result = convert(32)
console.log(result)
let otherResult = convert(68)
console.log(otherResult)
