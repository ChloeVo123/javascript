// let : the variable can be re-assigned the value
// const : the variable cannot be reassigned the value 
const isRaining = true 

//isRaining = false 

console.log(isRaining)

const person = {
    age: 26
}

// person = {}   => cause error

person.age = 27 // => true as we change the object property

console.log(person)
