let myBook = {
    title: '1984',
    author: 'George Arwell',
    pageCount: 324
}

let otherBook = {
    title: 'A people history',
    author: 'Howard Zinn',
    pageCount: 777
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// F to C and K 
let convertFahrenheit = function (fahrenheit) {
    
    return {
        fahrenheit : fahrenheit,
        celsius : (fahrenheit - 32) * (5 / 9),
        kenvin : (fahrenheit + 459.67) * (5 / 9)
    }
}

let temps = convertFahrenheit(32)
console.log(temps)

