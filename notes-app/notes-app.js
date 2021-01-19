// DOM - DOcument (HTML doc) Object (JS object) Model.
// The document is modeled using a javascript object and that object is called document


//Query and Remove
// const p = document.querySelector('p')
// p.remove()

//Querry all and remove
const ps = document.querySelectorAll('p')

ps.forEach( function (p) {
    p.textContent = "***********"
    //console.log(p.textContent)
    //p.remove()
})