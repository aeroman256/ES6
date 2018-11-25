/*
let add = (...values) => values.reduce((x, y) => x + y)


console.log(add(1, 4 ,6))

console.log(typeof add)*/


///console.log(square(9))

let numbers = [1,2 ,3 ,4 ,5]

let sum = 0

numbers.forEach((number) => {
    console.log(number)
    sum += number
});

let square = numbers.map((n) => n*n)

console.log('sum: ', sum)
console.log('square: ', square)

let person = {
    name: 'Bob',
    greet: function() {
        console.log()
    }
}