const notes = ['Note 1', 'Note 2', 'Note 3']

// //Remove item from the end out of the array
// console.log(notes.pop()) 
// //Add item to the end
// notes.push("My new todo")
// //Remove the first item from the array 
// console.log(notes.shift())
// console.log(notes.unshift('My first note'))

// notes.splice(1, 1, 'This is the new second item')

notes[2] = 'This is the new note 3'

notes.forEach(function (item) {  // callback function = a function is passed to another function
    console.log(item)
})
console.log(notes.length)
// console.log(notes[notes.length - 1])

console.log(notes)

//counting 
for (let count = 2; count >= 0; count --) {
    console.log(count)
}

for (let count = notes.length - 1; count >=0 ; count --) {
    console.log(notes[count])
}