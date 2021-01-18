let name = '   Chloe Vo'

//Length property
console.log(name.length)

//Convert to Upper Case
console.log(name.toUpperCase())

//Convert to Lower Case
console.log(name.toLowerCase())

//Include method
let password = 'abcdefpassword'
console.log(password.includes('password'))

//trim method
console.log(name.trim())

//isValidPassword
let isValidPassword = function(password) {
    // if (password.length > 8 && !password.includes('password')) {
    //     return true
    // } else {
    //     return false
    // }
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('abd'))
console.log(isValidPassword('abd2345!#%#'))
console.log(isValidPassword('abd#$@#password'))