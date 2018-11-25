'use strict';

/*
let add = (...values) => values.reduce((x, y) => x + y)


console.log(add(1, 4 ,6))

console.log(typeof add)*/

///console.log(square(9))

var numbers = [1, 2, 3, 4, 5];

var sum = 0;

numbers.forEach(function (number) {
    console.log(number);
    sum += number;
});

var square = numbers.map(function (n) {
    return n * n;
});

console.log('sum: ', sum);
console.log('square: ', square);

var person = {
    name: 'Bob',
    greet: function greet() {
        console.log();
    }
};