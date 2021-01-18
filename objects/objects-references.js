let myAccount = {
    name: 'Chloe',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount
    console.log(account)
}

// add income
let addIncome = function(account, amount ) {
    account.income = account.income + amount
}
//reset account
let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0
}
//get account summary 
let getAccountSummary = function(account) {
    let balance = account.income -account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses`
}

// addExpense(myAccount, 2)
// console.log(myAccount)

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
console.log(getAccountSummary(myAccount))


//reference types: array, function, object 
