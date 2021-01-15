//Undefined for variable 
let name 

name = "Hang"

if (name === undefined) {
    console.log("please provide a name")
} else {
    console.log(name)
}

//console.log(name)

//Undefined for function argument 
//undefined as function return default value

let square = function (num) {
    console.log(num) // -> undefined
}

let result = square() 
console.log(result) // the function actually doesnt return anything -> undefined

// Null as assigned value
let age = 26

age = null

console.log(age)
