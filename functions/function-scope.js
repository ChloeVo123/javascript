//Global scope  (convertFahrenheitToCelsius, tempOne, tempTwo)
    //Local scope (fahrenheit, celsius)
        //Local scope (isFreezing)
let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9

    if (celsius <=0) {
        let isFreezing = true
    }

    return celsius
} 

let tempOne = convertFahrenheitToCelsius(32)
console.log(tempOne)
let tempTwo = convertFahrenheitToCelsius(68)
console.log(tempTwo)