let currentPlayer = 536
let nextPlayer = 3721

console.log({ currentPlayer })
console.log({ nextPlayer })


// Function statement (has hoisting):
// function changeTurns () {}

// Function expression:
let changeTurns = function () {
    let temp = currentPlayer
    currentPlayer = nextPlayer
    nextPlayer = temp
}

console.log({ currentPlayer })
console.log({ nextPlayer })

// ...

changeTurns()

// ...

changeTurns()

// ...

changeTurns()

// ...

// "Arguments": input values
// "Parameters": input variables
// "Return": a return statement instructs the function what to OUTPUT

let printer = function (paper, ink, electricity, documentData) {
    // ... do all the work necessary for printing paper
    let finishedPaper = paper + ink + documentData

    return finishedPaper
}

let printedCertificate = printer("8.5x11", "black", "120hz", "<html>...</html>")

let add = function (x, y) {
    let sum = x + y

    return sum
}

let result1 = add(4, 2)
let result2 = add(-5, 7)

console.log({ result1 })
console.log({ result2 })

let add100 = function (x) {
    return add(x, 100)
}

let result3 = add100(27)
