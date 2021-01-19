const todos = ['Order rice cake', 'Carpet steam cleaning', 'Walk the dog', 'Lesmill time']

//Delete the third item
console.log(todos.splice(2, 1))
//Add new item onto the end
console.log(todos.push('Buy coffee'))
//Remove first item from the list
console.log(todos.shift())
//console.log(`You have ${todos.length} things to do in your list`)
// console.log(`Todo: ${todos[0]}`)
// console.log(`Todo: ${todos[todos.length - 1]}`)
console.log(todos)

todos.forEach(function (item, index) {
    const num = index + 1
    console.log(`${num}. ${item}`)
})

for ( let count = 0; count < todos.length; count ++ ) {
    const num = count + 1
    const todo = todos[count]
    console.log(`${num}. ${todo}`)
}